import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Home() {
    return (
        <div>
            <Header />
         
            <div class="wrapper">
                <div id="slider">
                    <div id="slide-wrapper" class="rounded clear">

                        <figure id="slide-1"><a class="view" href="#"><img src="images/demo/slider/1.png" alt="" /></a>
                            <figcaption>
                                <h2>Nullamlacus dui ipsum</h2>
                                <p>Attincidunt vel nam a maurisus lacinia consectetus magnisl sed ac morbi. Inmaurisus habitur pretium eu et ac vest penatibus id lacus parturpis.</p>
                                <p class="right"><a href="#">Continue Reading &raquo;</a></p>
                            </figcaption>
                        </figure>
                        <figure id="slide-2"><a class="view" href="#"><img src="images/demo/slider/2.png" alt="" /></a>
                            <figcaption>
                                <h2>Aliquatjusto quisque nam</h2>
                                <p>Attincidunt vel nam a maurisus lacinia consectetus magnisl sed ac morbi. Inmaurisus habitur pretium eu et ac vest penatibus id lacus parturpis.</p>
                                <p class="right"><a href="#">Continue Reading &raquo;</a></p>
                            </figcaption>
                        </figure>
                        <figure id="slide-3"><a class="view" href="#"><img src="images/demo/slider/3.png" alt="" /></a>
                            <figcaption>
                                <h2>Aliquatjusto quisque nam</h2>
                                <p>Attincidunt vel nam a maurisus lacinia consectetus magnisl sed ac morbi. Inmaurisus habitur pretium eu et ac vest penatibus id lacus parturpis.</p>
                                <p class="right"><a href="#">Continue Reading &raquo;</a></p>
                            </figcaption>
                        </figure>
                        <figure id="slide-4"><a class="view" href="#"><img src="images/demo/slider/4.png" alt="" /></a>
                            <figcaption>
                                <h2>Aliquatjusto quisque nam</h2>
                                <p>Attincidunt vel nam a maurisus lacinia consectetus magnisl sed ac morbi. Inmaurisus habitur pretium eu et ac vest penatibus id lacus parturpis.</p>
                                <p class="right"><a href="#">Continue Reading &raquo;</a></p>
                            </figcaption>
                        </figure>
                        <figure id="slide-5"><a class="view" href="#"><img src="images/demo/slider/5.png" alt="" /></a>
                            <figcaption>
                                <h2>Dapiensociis temper donec</h2>
                                <p>Attincidunt vel nam a maurisus lacinia consectetus magnisl sed ac morbi. Inmaurisus habitur pretium eu et ac vest penatibus id lacus parturpis.</p>
                                <p class="right"><a href="#">Continue Reading &raquo;</a></p>
                            </figcaption>
                        </figure>

                        <ul id="slide-tabs">
                            <li><a href="#slide-1">All About The University</a></li>
                            <li><a href="#slide-2">Why You Should Study With Us</a></li>
                            <li><a href="#slide-3">Education And Student Experience</a></li>
                            <li><a href="#slide-4">Alumni And Its Donors</a></li>
                            <li><a href="#slide-5">Latest University News &amp; Events</a></li>
                        </ul>

                    </div>
                </div>
            </div>
            
            <Footer />
        </div>

    )
}

export default Home