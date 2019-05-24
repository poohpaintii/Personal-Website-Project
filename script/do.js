//anonymous function
(function () {
    `use strict`;
    //สร้าง address book data ใน json Object
    var contacts = { "addressWeb" : [
        {
            "name": "59030138 : นนท์",
            "web": "http://quarrelsome-motion.surge.sh/index.html"
        },
        {
            "name": "59030139 : น้ำ",
            "web": "https://github.com/Juntakan"
        },
        {
            "name": "59030140 : เต้",
            "web": "https://github.com/TaeJirapan"
        },
        {
            "name": "59030143 : มีน",
            "web": "https://github.com/jrmeen/web-project.git"
        },
        {
            "name": "59030144 : แตงโม",
            "web": "https://github.com/Tangmo17412/Personal-Website-Project-.git"
        },
        {
            "name": "59030155 : ณุ",
            "web": "https://github.com/chitsanu345/59030155.git"
        },
        {
            "name": "59030167 : ชมพู่",
            "web": "https://github.com/poohpaintii/Personal-Website-Project.git"
        },
        {
            "name": "59030171 : แฟรี่เทลล์",
            "web": "https://github.com/Tiaranuch/Personal-Website-Project.git"
        },
        {
            "name": "59030174 : เฟิร์น",
            "web": "https://github.com/fernlolloi/-Personal-Website-Project.git"
        },
        {
            "name": "59030179 : พี่ออย",
            "web": "https://github.com/benjaporn01/myPersonalProject.git"
        },
        {
            "name": "59030185 : กาตุ่ย",
            "web": "https://github.com/Paweena27/Paweena59030185.git"
        },
        {
            "name": "59030187 : บอมเบย์",
            "web": "https://github.com/Pitirak/PersonalWebsiteProject.git"
        },
        {
            "name": "59030194 : กล",
            "web": "https://github.com/konpeerawit/Personal-Website-Project.git"
        },
        {
            "name": "59030195 : กอล์ฟ",
            "web": "https://github.com/eventpb/Personal-Website-Project.git"
        },
        {
            "name": "59030196 : อาฟีฟี่",
            "web": "https://github.com/Manussaweemakaew196/196-Website-Project.git"
        },
        {
            "name": "59030198 : มาวิน",
            "web": "https://github.com/MawinAPN/WebsiteProject.git"
        },
        {
            "name": "59030206 : มูมิน",
            "web": "https://github.com/minwichita/Wichita-Website-Project.git"
        },
        {
            "name": "59030212 : นาย",
            "web": "http://ninesarun.surge.sh/"
        },
        {
            "name": "59030216 : แนท",
            "web": "https://github.com/natsirisak/Personal-Website-Project.git"
        },
        {
            "name": "59030221 : หมูแฮม",
            "web": "https://github.com/powpunt/Personal-Project.git"
        },
        {
            "name": "59030222 : แนน",
            "web": "https://github.com/sukanya222"
        },
        {
            "name": "59030229 : บอส",
            "web": "https://github.com/SurasitBoss229?tab=repositories"
        },
        {
            "name": "59030232 : โต",
            "web": "https://github.com/Sopon59030232/Pesonal-website-project.git"
        }
    ] 
};
//address book methods
    var searchForm = document.querySelector(`#searchForm`),
        searchField = document.querySelector(`#q`),
        count = contacts.addressWeb.length,
        target = document.querySelector(`#output`);        
        getAllButton = document.querySelector(`#getAll`);
        
    var addr = {
        search : function (event) {
            //save input value,contact lenhth and i to variables
            var searchValue = searchField.value,i;
            //หยุด drefault behavior
            event.preventDefault();
            //clear the target area just in case there's s'thing in it
            target.innerHTML = ``;
            //check count
            if (count > 0 && searchValue !== ``) {
            //loop จนกระทั่ง the contacts
                for (i = 0; i < count; i = i + 1) {
                    // name value to see ถ้า  it contains the searchterm string
                    var obj = contacts.addressWeb[i],
                        isItFound = obj.name.indexOf(searchValue);
                        //anything other than -1 means we found a match
                    if (isItFound !== -1) {
                        target.innerHTML += `<p>${obj.name}, <a href="${obj.web}">${obj.web}</a><p>`;
                    }
                }
            }
        },      
        getAllContacts : function () {
            var i;
            target.innerHTML = ``;
            if (count > 0) {
                for (i = 0; i < count; i = i + 1) {
                    var obj = contacts.addressWeb[i];
                    target.innerHTML += `<p>${obj.name}, <a href="${obj.web}">${obj.web}</a><p>`;
                }
            }
        },       
       setActiveSection : function () {
        // เพิ่ม class "Active" ไปที่ wrapping div
            this.parentNode.setAttribute(`class`,`active`);          
        },
        removeActionSection : function () {
        // remove class จาก wrapping div
            this.parentNode.removeAttribute(`class`);
        },
        addHoverClass : function(){
        // เพิ่ม class ไปที่ wrapping div
        searchForm.setAttribute(`class`,`hovering`); 
        },
        removeHoverClass : function(){
        // เพิ่ม class ไปที่ wrapping div
        searchForm.removeAttribute(`class`); 
        }
};
    searchField.addEventListener(`keyup`,addr.search,false);
    searchForm.addEventListener(`submit`,addr.search,false);
    getAllButton.addEventListener(`click`, addr.getAllContacts, false);
    searchField.addEventListener(`focus`,addr.setActiveSection,false);
    searchField.addEventListener(`blur`,addr.removeActionSection,false);    
    searchForm.addEventListener(`mouseout`,addr.removeHoverClass,false);    
})();
//end