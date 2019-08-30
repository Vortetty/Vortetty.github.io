onload = function(){


  var url = window.location.pathname;
  
  $(".404").html('<pre><code>\n	 <span class="green">&lt;!</span><span>DOCTYPE html</span><span class="green">&gt;</span>\n<span class="orange">&lt;html&gt;</span>\n    <span class="orange">&lt;style&gt;</span>\n   * {\n		        <span class="green">everything</span>:<span class="blue">awesome</span>;\n}\n     <span class="orange">&lt;/style&gt;</span>\n <span class="orange">&lt;body&gt;</span> \n              ERROR 404!\n				" + url + " NOT FOUND!\n				<span class="comment">&lt;!--The file you are looking for, \n					is not where you think it is.--&gt;\n		</span>\n <span class="orange"></span> \n	\n	  \n\n\n</div>\n<br />\n<span class="info">\n<br />\n\n<span class="orange">&nbsp;&lt;/body&gt;</span>\n\n<br/>\n      <span class="orange">&lt;/html&gt;</span>\n    </code></pre>\n\n');


}
