"use strict";
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 2415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/wesleysimeontan/wesley-tan.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(7865);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// CONCATENATED MODULE: ./src/images/wesley-tan-logo.png
/* harmony default export */ const wesley_tan_logo = ("/static/wesley-tan-logo-8e793650e8b7fb6b733bf01f6ca49a5d.png");
;// CONCATENATED MODULE: ./src/pages/index.js
// Make sure to import Link from Gatsby
const pageStyles={color:"#232129",padding:"5rem",// Uniform padding
fontFamily:"'Helvetica Neue', Helvetica, Arial, sans-serif",// Professional sans-serif font
display:"flex",flexDirection:"column",alignItems:"center",// Center items on the page
justifyContent:"center",minHeight:"100vh"// Full view height
};const logoContainerStyles={display:"flex",alignItems:"center",// This will vertically center the logo with the adjacent text
justifyContent:"flex-start"// Align the content to the start of the container
};const logoStyles={width:"150px",// Set a fixed size for your logo
height:"150px",// Make it a perfect circle
borderRadius:"50%",// This makes the image circular
objectFit:"cover",// Ensures the image covers the area without stretching
marginRight:"1rem",// Right margin for spacing between logo and text
display:"inline-block"// Align inline with text
};// Define your heading styles here
const headingStyles={borderBottom:"2px solid #232129",// Add a subtle bottom border to the headings
paddingBottom:"0.5rem",marginBottom:"2rem"};const headingContainerStyles={display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"// Ensure that content is laid out in a row
// Add other styling as needed
};const headingAccentStyles={color:"#232129"};const linkContainerStyles={textAlign:"center"// Center-align the navigation links
};const listStyles={listStyle:"none",// Remove list bullets
padding:0,// Remove padding
margin:"2rem 0"// Add some margin for spacing
};const listItemStyles={fontWeight:"normal",// Less emphasis on list item weight
fontSize:"1.5rem",// Larger font for readability
marginBottom:"3.0rem"// More white space between items
};const linkStyle={color:"#232129",// Same color for a more uniform look
textDecoration:"none",// No underline for a cleaner look
fontSize:"1.25rem"// Consistent font size with list items
};const descriptionStyle={fontSize:"1rem",// Smaller than the link for hierarchy
color:"#696969",// Lighter color for less focus
marginTop:"0.25rem"// Just a bit of space from the link
};const links=[{text:"My CV (updated 10 January 2024)",url:"https://drive.google.com/file/d/1OhAsNJhTFc-omkgsXJHgEh0Bl4mGQGns/view?usp=sharing",isExternal:true,// Flag to indicate an external link
description:"My updated CV"},{text:"Projects",url:"/projects",isExternal:false,// Flag for an internal link
description:"My current projects"},{text:"Tutoring",url:"/tutoring",isExternal:false,description:"My tutoring and portfolio"}];const IndexPage=()=>{return/*#__PURE__*/index_js_default().createElement("main",{style:pageStyles},/*#__PURE__*/index_js_default().createElement("div",{style:headingContainerStyles},/*#__PURE__*/index_js_default().createElement("img",{src:wesley_tan_logo,alt:"Wesley Tan Logo",style:logoStyles}),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("h1",null,"Hello!",/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("span",{style:headingAccentStyles},"Welcome to Wesley Tan's personal website")))),/*#__PURE__*/index_js_default().createElement("ul",{style:listStyles},links.map((link,index)=>/*#__PURE__*/index_js_default().createElement("li",{key:index,style:{...listItemStyles,borderBottom:index===links.length-1?'none':''}},link.isExternal?/*#__PURE__*/index_js_default().createElement("a",{href:link.url,target:"_blank",rel:"noopener noreferrer",style:{color:link.color}},link.text):/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:link.url,style:{color:link.color}},link.text)))));};/* harmony default export */ const pages = (IndexPage);const Head=()=>/*#__PURE__*/index_js_default().createElement("title",null,"Home Page");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map