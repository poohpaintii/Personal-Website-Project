# Personal-Website-Project
Web Technology 03376809
by Asst.Prof.Pongkiat Jongtriluck
Dept. of Engineering Education
Faculty of Industrial Education and Technology, KMITL
-------------------------------------------------------
Name : Thanyarat Chanhanghwa    
Student Id : 59030167 
-------------------------------------------------------
Personal-Website-Project
All file
1) html = {start.html , index.html , cv.html, do.html}
2) css = {style.css , start.css , do.css}
3) javascript = {start.js , do.js}
--------------------------------------------------------
Page in site
-------------
1) Start (start.html + start.css + start.js)
    -ใช้ javascript = start.js โดยมีการ input text โดยใช้ message box แล้วรับค่ามาแสดงที่หน้า page และ ลิงค์สำหรับเชื่อมไปที่หน้า Home

2) Home (index.html + style.css)
    -ส่วนของ css = style.css กำหนดพื้นที่ในส่วนต่างๆ โดยใช้ Responsive Web Design แบบ Grid-View
    -A responsive grid-view often has 12 columns, and has a total width of 100%, and will shrink and expand as you resize the browser window.
    -all HTML elements have the box-sizing property set to border-box
    -และในแต่ละ div ของ col-9 กำหนดให้เป็นรูปแบบของ flex-box โดยให้ flexwrap property set to Wrap
    -แต่ละ div จะลิงค์ไปยังหน้าต่างๆได้ รวมทั้งลิงค์ไปยังเว็บไซต์ภายนอก

3) About Me + Gallery (cv.html + style.css )
    -หน้า About Me จะทำเป็น 2 ส่วน คือส่วนที่เป็นข้อมูลส่วนตัว และส่วนที่เป็น Gallery รูปภาพ ใน 1 หน้าเดียวกัน -เมื่อกดเลือกแถบ About Me ในหน้า Home ก็จะลิงค์ มาหน้า About Me 
    -และถ้ากด Gallery ในหน้า Home ก็จะลิงค์มาที่หน้า About Me เช่นเดียวกัน 
    -ในหน้า About Me ในส่วนของข้อมูลส่วนตัว เมื่อกดรูปตรงกลาง 
      จะลิงค์ไปยังส่วนของ Gallery โดยใช้ id tag ( id="pic" , #pic)

4) Search (do.html + do.css + do.js) 
    -Link to website or GitHub to Personal Website Project of Computer Ed.Engineer'38 members 
    -สำหรับ search หา link to wedsite หรือ link to GitHub to Personal Website Project ของ สมาชิกในแขนงวิศวกรรมคอมพิวเตอร์ สาขาครุศาสตร์วิศวกรรม คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี รุ่นที่ 38 2/2018
    -ตอนแรกตั้งใจจะนำลิงค์ของเว็บไซต์มาใส่แต่สมาชิกบางส่วนยังทำเว็บไซต์ไม่เรียบร้อยจริงใช้ลิงค์ของ GitHub แทน
    -การทำงานคือ ป้อน student Id ของ members ลงไป หรือจะแสดง link of all members ก็จะแสดง รหัสนักศึกษาและชื่อเล่นของแต่ละ members + link ของ member นั้นๆ
    
    -ส่วนของ javascript 
        1) ใช้ anonymous function  สร้าง address Link data ใน json Object
        2) สร้าง address link methods โดยกำหนดตัวแปรในการเก็บค่าของ Element โดยการเข้าไปใน DOM โดยใช้ css selector เป็นตัวชี้ (querySelector)
        3) ฟังก์ชันในการ search 
            -สร้างตัวแปรสำหรับ save input value,contact lenhth and i to variables
            -clear the target area just in case there's s'thing in it
            -จากนั้น check count if (count > 0 && searchValue !== ``) และ loop จนกระทั่ง the contacts
        4) ฟังก์ชัน GetAllContacts สำหรับแสดงข้อมูลของทุกๆ members
        5) ใช้ EventListener ดังนี้ `keyup`,`submit`,`click`,`focus`,`blur`,`mouseout`
            -setActiveSection เพื่อ เพิ่ม class "Active" ไปที่ wrapping div
            -removeActionSection เพื่อ remove class จาก wrapping div
            -addHoverClass เพื่อ เพิ่ม class ไปที่ wrapping div เมื่อ Hover
            -removeHoverClass เพื่อ remove class จาก wrapping div เมื่อ Hover
        6) ฟังก์ชันการทำงานในส่วนของ do.js อ้างอิงมาจาก Lab 7 เรื่อง EventListener วิชา Web Technology 03376809 by Asst.Prof.Pongkiat Jongtriluck
