const pages = {  
  index: "src/main.js",  
};  
  
module.exports = {  
  publicPath: "/",
  outputDir: "./build/static/vue/",
  indexPath: "../../templates/vue_index.html",
  
  pages: pages,  
  devServer: {
    disableHostCheck: true
  } 
  
};
