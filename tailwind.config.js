/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "orange-img": "url('/background.png')",
        "tagimg": "url('/shape.png')",
        "uploadimg": "url('https://customany.com/wp-content/plugins/product-extras-for-woocommerce/assets/images/upload.svg')"
      
      },
    },
  },
  plugins: [],
};
