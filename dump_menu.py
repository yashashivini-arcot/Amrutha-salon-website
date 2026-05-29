import os
import pypdfium2 as pdfium
from PIL import Image
import winocr

def dump_menu():
    pdf_path = r"c:\Users\venua\OneDrive\Desktop\Menu aMRUTHA New.pdf"
    output_path = "menu_ocr_text.txt"
    
    if not os.path.exists(pdf_path):
        print(f"Error: PDF not found at {pdf_path}")
        return
        
    print(f"Loading PDF: {pdf_path}")
    doc = pdfium.PdfDocument(pdf_path)
    num_pages = len(doc)
    print(f"Total pages: {num_pages}")
    
    extracted_data = []
    
    for i in range(num_pages):
        print(f"OCR scanning page {i+1}/{num_pages}...")
        try:
            # Render page at 2x resolution for high OCR accuracy
            bitmap = doc[i].render(scale=2)
            pil_img = bitmap.to_pil()
            
            # Run OCR
            result = winocr.recognize_pil_sync(pil_img)
            text = result.get("text", "").strip()
            
            if len(text) > 15:
                extracted_data.append(f"=== PAGE {i} ===\n{text}\n")
                print(f"Page {i} had {len(text)} characters of text.")
            else:
                print(f"Page {i} was empty or had very little text ({len(text)} chars).")
        except Exception as e:
            print(f"Error scanning page {i}: {e}")
            
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(extracted_data))
        
    print(f"Successfully dumped OCR text to {output_path}")

if __name__ == "__main__":
    dump_menu()
