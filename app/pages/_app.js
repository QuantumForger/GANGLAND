import '../styles/globals.css'; // Adjust path if no styles folder exists

function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
      const placeholderURL = "https://via.placeholder.com/600x400?text=Image+Not+Found";
      document.querySelectorAll('img').forEach((img) => {
        img.onerror = () => {
          console.warn(`Image not found: ${img.src}`);
          img.src = placeholderURL;
        };
      });
    });
  }

  return <Component {...pageProps} />;
}

export default MyApp;
