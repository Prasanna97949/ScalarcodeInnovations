// navbar
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// subtitle adding
        function addSection() {
            const section = document.createElement('div');
            section.classList.add('blog-section', 'mb-4');
            section.innerHTML = `
                <label class="block text-gray-700 font-semibold mb-2">Subtitle:</label>
                <input type="text" class="w-full p-2 border border-gray-300 rounded-lg mb-2" placeholder="Enter subtitle">
                <label class="block text-gray-700 font-semibold mb-2">Content:</label>
                <textarea rows="4" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter blog content"></textarea>
            `;
            document.getElementById('blog-sections').appendChild(section);
        }