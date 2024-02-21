import React from 'react'
import Card from 'react-bootstrap/Card';
import style from './Main.module.css'
import Button from 'react-bootstrap/Button';
import { Typewriter } from 'react-simple-typewriter'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


function Main() {

    return (
        <div>
            <div className={style.imagesection}>
                <div className={style.textsection}>
                    <p>Workout video</p>
                    <p>for every fitness</p>
                    <p>level.</p>
                    <span> <Typewriter
                        words={['Absolutely free']}
                        loop={50}
                        cursor
                        cursorStyle='|'
                        typeSpeed={40}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /></span>
                    <p className={style.extratext}>Earn your WORKOUT COMPLETE</p>
                </div>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div className={style.cards}>
                    <SwiperSlide><Card style={{ height: "200px", textAlign:"center", backgroundColor: '#313444', color: '#fff' }} >
                        <Card.Body>
                            <Card.Title>Working Video</Card.Title>
                            <Card.Text>
                                <p>Access to hundreds of free,</p>
                                <p>full-length workout video.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card></SwiperSlide>
                    <SwiperSlide><Card style={{ height: "200px",textAlign:"center", backgroundColor: '#313444', color: '#fff' }}>
                        <Card.Body>
                            <Card.Title>Workout Program</Card.Title>
                            <Card.Text>
                                <p>Affordable and effective workout programs.  </p>
                            </Card.Text>
                        </Card.Body>
                    </Card></SwiperSlide>
                    <SwiperSlide><Card style={{ height: "200px",textAlign:"center", backgroundColor: '#313444', color: '#fff' }}>
                        <Card.Body>
                            <Card.Title>Meal Plan</Card.Title>
                            <Card.Text>
                                <p>Plans built with registered dietitians and nutritionists.  </p>
                            </Card.Text>
                        </Card.Body>
                    </Card></SwiperSlide>
                    <SwiperSlide><Card style={{ height: "200px",textAlign:"center", backgroundColor: '#313444', color: '#fff' }}>
                        <Card.Body>
                            <Card.Title>Fb Plus</Card.Title>
                            <Card.Text>
                                <p>Add powerful features to your membership.  </p>
                            </Card.Text>
                        </Card.Body>
                    </Card></SwiperSlide>
                </div>
            </Swiper>
            <div>
                <div className={style.sectiontwo}>
                    <div className={style.sectiontext}>
                        <p className={style.headertext}>Work out at home for free</p>
                        <div className={style.subtext}>
                            <p>We believe fitness should be accessible to everyone, </p>
                            <p>everywhere, regardless of income or access to a gym.</p>
                            <p>With hundreds of professional workouts, healthy</p>
                            <p>recipes and informative articles, as well as one of the</p>
                            <p>most positive communities on the web, you’ll have</p>
                            <p>everything you need to reach your personal fitness</p>
                            <p>goals – for free!</p>
                        </div>
                        <div className={style.subbtn}>
                            <Button variant="primary" className="mb-2" >BROWSE VIDEOS</Button>
                            <Button variant="primary" className="mb-2">JOIN NOW</Button>
                        </div>
                    </div>
                    <div className={style.imagesectiontwo}>
                    </div>
                </div>
                <div className={style.sectionthree}>
                    <div className={style.imagesectionthree}></div>
                    <div className={style.sectiontext}>
                        <div className={style.headertexttwo}>
                            <p>Get more with low-cost training</p>
                            <p>programs and advanced</p>
                            <p>features.</p>
                        </div>
                        <div className={style.subtexttwo}>
                            <p>If you want more guidance or additional tools to get</p>
                            <p>the most out of all the content available, we also have</p>
                            <p>low-cost, professionally developed programs and meal</p>
                            <p>plans to follow, and a monthly membership that adds</p>
                            <p>extra, exclusive workout videos, monthly workout</p>
                            <p>challenges, and a growing list of advanced features for</p>
                            <p>planning and tracking your workouts.</p>
                        </div>
                        <div className={style.subbtn}>
                            <Button variant="primary" className="mb-2" >BROWSE VIDEOS</Button>
                            <Button variant="primary" className="mb-2">JOIN NOW</Button>
                        </div>
                    </div>
                </div>
                <div className={style.cardstwo}>
                    <div>
                        <h2>Not sure where to start?</h2>
                        <p>Programs offer day-to-day guidance on an interactive calendar to keep you on track.</p>
                    </div>

                    <div className={style.cardstwosection}>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p class="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                </div>
                        </div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>

                </div>
                <div className={style.sectionfour}>
                    <div className={style.sectiontexttow}>
                        <p>ABOUT FITNESS BLENDER</p>
                        <div className={style.subtextthree}>
                            <p>Created by personal</p>
                            <p>trainers,kelli and Daniel</p>
                            <p>Segars-a husband and wife</p>
                            <p>team passionate about</p>
                            <p>helping you achieve your</p>
                            <p>health and fitness goals.</p>
                        </div>
                        <div className={style.countertext}>
                            <div>
                                <span className={style.counter}>35+</span>
                                <p>35+ million workouts completed</p>
                                <p>each month by our amazing Fitness</p>
                                <p>Blender Family.</p>
                            </div>
                            <div>
                                <span className={style.counter}>500+</span>
                                <p>500+ free workout videos for every</p>
                                <p>fitness level + effective & affordable</p>
                                <p>workout programs.</p>
                            </div>
                            <div>
                                <span className={style.counter}>26+</span>
                                <p>26+ years of combined experience</p>
                                <p>helping people achieve their fitness &</p>
                                <p>health goals.</p>
                            </div>
                        </div>

                    </div>
                    <div className={style.boxfive}>
                        <div className={style.imagesectionfour}>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
