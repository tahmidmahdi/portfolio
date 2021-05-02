import React from 'react';
import './Blogs.css'
import blog1 from '../../images/blog1.jpeg'
import blog2 from '../../images/blog2.jpeg'
import blog3 from '../../images/blog3.png'

const Blogs = () => {
    return (
        <div className="blogs" id='blog'>
            <h1><span className="span-text">04</span> Recent Blogs</h1>
           
            <div className="blog-cart">
                <div class="card mt-5" data-aos="zoom-in-up">
                    <div class="card-body">
                        <h5 class="card-title"><span className="span-text">Difference Between Var,Let And Const</span></h5>
                        <p class="card-text"><i>Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope</i>.</p>
                        
                    </div>
                    <img src={blog1} class="card-img-bottom" alt="..." />
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <a href='https://tahmidmahdi.medium.com/difference-between-var-let-const-in-javascript-76525d206488' target='_blank'><button className="button ">View Article</button></a>
                </div>
    
                <div class="card mt-5" data-aos="zoom-in-up">
                    <div class="card-body">
                        <h5 class="card-title"><span className="span-text">Modern javaScript & Its Evaluation</span></h5>
                        <p class="card-text"><i>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. —</i>.</p>
                        
                    </div>
                    <img src={blog2} class="card-img-bottom" alt="..." />
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <a href='https://tahmidmahdi.medium.com/difference-between-var-let-const-in-javascript-76525d206488' target='_blank'><button className="button ">View Article</button></a>
                </div>
    
    
                <div class="card mt-5" data-aos="zoom-in-up">
                    <div class="card-body">
                        <h5 class="card-title"><span className="span-text">React Is Fun</span></h5>
                        <p class="card-text"><i>Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope</i>.</p>
                        
                    </div>
                    <img src={blog3} class="card-img-bottom" alt="..." />
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <a href='https://tahmidmahdi.medium.com/difference-between-var-let-const-in-javascript-76525d206488' target='_blank'><button className="button ">View Article</button></a>
                </div>
            </div>
        </div>
    );
};

export default Blogs;