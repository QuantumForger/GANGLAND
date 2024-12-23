export const metadata = {
    title: "GANGLAND",
    description: "App using Next.js App Router",
  };
  
  export default function RootLayout({ children }) {
    if (typeof window !== "undefined") {
      window.addEventListener("DOMContentLoaded", () => {
        const placeholderURL = "https://via.placeholder.com/600x400?text=Image+Not+Found";
        document.querySelectorAll("img").forEach((img) => {
          img.onerror = () => {
            console.warn(`Image not found: ${img.src}`);
            img.src = placeholderURL;
          };
        });
      });
    }
  
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  