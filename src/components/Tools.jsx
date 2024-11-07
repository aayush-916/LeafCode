import React,{useState} from 'react'
import './Tools.css'
import { motion } from "framer-motion";
function Tools() {
    const [web,setweb] = useState(true)
    const [app,setapp] = useState(false)
    const [db,setdb] = useState(false)
    const [tools,settools] = useState(false)

    const click = (ch)=>{
        setweb(false);
        setapp(false);
        setdb(false);
        settools(false);
        
        if (ch === 'web') setweb(true);
        else if (ch === 'app') setapp(true);
        else if (ch === 'db') setdb(true);
        else if (ch === 'tools') settools(true);
    }
  return (
    <motion.div
        className="container3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text">
            <h2>Tools & Technology</h2>
            <p>New tools and technologies are emerging as part of ongoing technological development, and organizations may take advantage of them with relative ease thanks to increasingly available cloud-based solutions.
            </p>
        </div>
        <div className="nav3">
            <div className={`web ${web ? 'cli' : ''}`} onClick={()=> click('web')}>
                Web
            </div>
            <div className={`app ${app ? 'cli' : ''}`} onClick={()=> click('app')}>
                Apps
            </div>
            <div className={`db ${db ? 'cli' : ''}`} onClick={()=> click('db')}>
                DB/Server
            </div>
            <div className={`tools ${tools ? 'cli' : ''}`} onClick={()=> click('tools')}>
                Tools
            </div>
        </div>




 <section id="skills" className={`skills-section hid ${web ? 'dis' : ''}`}>
  <div className="skills-grid">
    <div className="skill-item">
      <img src='/web/React-JS.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/wordpress.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/shopify.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/Php.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/Python.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/HTML.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/CSS.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/Java-Script.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/Laravel.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/Node-JS.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/Next-JS.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/Vue-JS.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/Angular-JS.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/Bootstrap.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/JQuery.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/web/woo.png' className="skill-icon" />
    </div>
  </div>
</section>

 <section id="skills" className={`skills-section hid ${app ? 'dis' : ''}`}>
  <div className="skills-grid">
    <div className="skill-item">
      <img src='/app/Android-Native.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/app/React-JS.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/app/Kotlin.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/app/Flutter.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/app/Ionic.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/app/Swift-UI.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/app/Swift.png' className="skill-icon" />
    </div>
    
  </div>
</section>

 <section id="skills" className={`skills-section hid ${db ? 'dis' : ''}`}>
  <div className="skills-grid">
    <div className="skill-item">
      <img src='/db/AWS.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/db/Azure.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/db/My-SQL.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/db/Mongo-DB.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/db/Firebase.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/db/SQL.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/db/Nginx-server.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/db/Maria-DB.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/db/VPS.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='/db/Digital-Ocean.png' className="skill-icon" />
    </div>

  </div>
</section>

 <section id="skills" className={`skills-section hid ${tools ? 'dis' : ''}`}>
  <div className="skills-grid">
    <div className="skill-item">
      <img src='\tools\Visual-code.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='\tools\XAMP.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='\tools\Adobe-Illustrator.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='\tools\Github.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='\tools\Gitlab.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='\tools\Atoms.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='\tools\Jira.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='\tools\Sublime.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='\tools\Photoshop.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='\tools\Adobe-XD.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='\tools\Asana.png' className="skill-icon" />
    </div>
    <div className="skill-item">
      <img src='\tools\Bitbucket.png' className="skill-icon" />
    </div>
    
  </div>
</section>


    </motion.div>
  )
}

export default Tools