import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams,Link }  from "react-router-dom";
import axiosInstance from './Components/axiosInstance';

import config from "./Components/config";
const Home=()=>{
  const {http} = axiosInstance();
  const [sliderList, setPosts] = useState([]);
let sessionId = '';
	useEffect(() =>{

sessionId = Math.random().toString(36).substring(2) + Date.now();
localStorage.setItem("cart_session_id", sessionId);

		http.get('home-slider')
			.then((result)=>{
			    console.log(result.data);
				setPosts(result.data)
			})
		  },[])


    return(
<div calss="">




<div class="home_banner_section position-relative">

	<img src="/assets/frontend/images/banner.jpg" alt="" />
	<div class="home_banner_content text-center">
		<div class="banner_heading text-white">Samsung Phone Screen Repairs, <strong>Brisbane</strong></div>
		<div class="banner_text text-white">We Provide 12 Months Warranty For Samsung Repairs</div>
		<a href="#" class="banner_btn common_btn">Book a Repair</a>
	</div>
</div>



<div class="banner_bottom_text text-center">
	<div class="container">Brisbane CBD Repair Services for all series Samsung Galaxy</div>
</div>



<div class="home_model_section">
	<div class="container">
		<div class="row">
			<div class="col-lg-2 home_model_block"><img src="/assets/frontend/images/model_img1.png" alt="" /></div>
			<div class="col-lg-2 home_model_block"><img src="/assets/frontend/images/model_img2.png" alt="" /></div>
			<div class="col-lg-2 home_model_block"><img src="/assets/frontend/images/model_img3.png" alt="" /></div>
			<div class="col-lg-2 home_model_block"><img src="/assets/frontend/images/model_img4.png" alt="" /></div>
			<div class="col-lg-2 home_model_block"><img src="/assets/frontend/images/model_img5.png" alt="" /></div>
			<div class="col-lg-2 home_model_block"><img src="/assets/frontend/images/model_img6.png" alt="" /></div>
		</div>
	</div>
</div>



<div class="home_screenrepair_section text-center">
	<div class="container">
		<div class="home_screenrepair_section_subheading">All our Samsung Screen Repairs Service come With 12 Months Warranty</div>
		<div class="home_screenrepair_section_heading text-uppercase">Service For Samsung <strong>Screen Repairs</strong></div>
		<div class="row">
			<div class="col-lg-4 home_screenrepair_block">
				<div class="home_screenrepair_block_img"><img src="/assets/frontend/images/screenrepair_img1.jpg" alt="" /></div>
				<div class="home_screenrepair_block_text">Samsung Galaxy S</div>
				<div class="home_screenrepair_block_heading">Samsung Galaxy S Series Screen Replacement</div>
				<a href="#" class="home_screenrepair_block_btn common_btn">Repair Now</a>
			</div>
			<div class="col-lg-4 home_screenrepair_block">
				<div class="home_screenrepair_block_img"><img src="/assets/frontend/images/screenrepair_img2.jpg" alt="" /></div>
				<div class="home_screenrepair_block_text">Samsung Galxy Note</div>
				<div class="home_screenrepair_block_heading">Samsung Galaxy Note Series Screen Replacement</div>
				<a href="#" class="home_screenrepair_block_btn common_btn">Repair Now</a>
			</div>
			<div class="col-lg-4 home_screenrepair_block">
				<div class="home_screenrepair_block_img"><img src="/assets/frontend/images/screenrepair_img3.jpg" alt="" /></div>
				<div class="home_screenrepair_block_text">Samsung Galaxy A</div>
				<div class="home_screenrepair_block_heading">Samsung Galaxy A Series Screen Replacement</div>
				<a href="#" class="home_screenrepair_block_btn common_btn">Repair Now</a>
			</div>
		</div>
	</div>
</div>



<div class="home_about_section">
	<div class="container">
		<div class="row">
			<div class="col-lg-4">
				<div class="home_about_section_subheading d-inline-block bg-white">About Us</div>
				<div class="home_screenrepair_section_heading mt-3">We are the top rated expert for samsung phone repairs</div>
				<div class="home_about_section_text">Your search for expert solutions for Samsung Galaxy screen replacement in Brisbane or Google Pixel 6 pro screen replacement in Brisbane ends here.</div>
				<a href="#" class="home_about_section_btn common_btn">Read More <img src="/assets/frontend/images/btn_arrow.png" alt="" /></a>
			</div>
			<div class="col-lg-7 offset-lg-1">
				<div class="home_about_section_right">
					<div class="row">
						<div class="col-lg-6">
							<div class="home_about_section_right_box">
								<div class="home_about_section_right_heading">Affordable Pricing for Samsung Galaxy Screen Repair</div>
								<div class="home_about_section_right_text">At our Samsung repair center, we offer competitive rates for screen repairs, ensuring great value. Our transparent pricing means no hidden fees, making high-quality Samsung Galaxy screen repair accessible and affordable.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>



<div class="home_spec_section position-relative">
	<div class="container">
		<div class="row text-center">
			<div class="col-lg-3 home_spec_block">
				<img src="/assets/frontend/images/spec_icon1.png" alt="" />
				<div class="home_spec_block_heading">Quick Turnaround</div>
				<div class="home_spec_block_text">Our Technician is an Expert at Repairing Devices Quickly</div>
			</div>
			<div class="col-lg-3 home_spec_block">
				<img src="/assets/frontend/images/spec_icon2.png" alt="" />
				<div class="home_spec_block_heading">Premium Parts</div>
				<div class="home_spec_block_text">We use Premium part for our repairs Service and Provide 12 Months Warranty</div>
			</div>
			<div class="col-lg-3 home_spec_block">
				<img src="/assets/frontend/images/spec_icon3.png" alt="" />
				<div class="home_spec_block_heading">Cost Efective</div>
				<div class="home_spec_block_text">We Provide Cost-Effective Repair Service to all our Customers</div>
			</div>
			<div class="col-lg-3 home_spec_block">
				<img src="/assets/frontend/images/spec_icon4.png" alt="" />
				<div class="home_spec_block_heading">12 Months Warranty</div>
				<div class="home_spec_block_text">Covering Defects and Quality Issues for a Full Year After Purchase</div>
			</div>
		</div>
		<div class="home_spec_block_border"></div>
		<div class="row">
			<div class="col-lg-6 offset-lg-1 pe-lg-5">
				<div class="home_screenrepair_section_heading">Samsung Galaxy Screen Repair: <strong>Fast &amp; Affordable Fix</strong></div>
				<div class="home_takeaway_text">At our Samsung repair center in Brisbane, we're experts in fixing Samsung Galaxy screens. If your screen is cracked, damaged, or not working right, our certified techs can help. They work fast and at prices you can afford.<br/><br/>We promise a top-quality repair that's easy for you. We know how crucial your smartphone screen is every day. So, we aim to fix your device quickly and well.</div>
				<a href="#" class="home_screenrepair_block_btn common_btn">Get a Quote</a>
			</div>
			<div class="col-lg-5 ps-lg-5 home_takeaway_left">
				<div class="home_screenrepair_section_heading">Key <strong>Takeaways</strong></div>
				<div class="home_takeaway_list">
					<ul>
						<li>Prompt and reliable Samsung Galaxy screen repair services in Australia</li>
						<li>Certified technicians with expertise in resolving screen-related issues</li>
						<li>Affordable pricing to fit your budget</li>
						<li>Fast turnaround time to minimize your device's downtime</li>
						<li>Commitment to quality and customer satisfaction</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<img src="/assets/frontend/images/samsung_img.png" alt="" class="floating_samsung_img" />
</div>



<div class="home_parts_section">
	<div class="container">
		<div class="home_screenrepair_section_heading text-center">Authentic Samsung Parts for The Best Fit</div>
	</div>
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-4 home_parts_block ps-lg-0">
				<div class="home_parts_block_inner position-relative overflow-hidden">
					<img src="/assets/frontend/images/parts_img1.png" alt="" />
					<div class="home_parts_block_heading text-white">Genuine Samsung Replacement Parts</div>
					<div class="home_parts_block_text">At our Samsung repair center, we know how crucial it is to use genuine parts for fixing your Galaxy device. That's why we get our screen repair parts straight from Samsung. This direct link with the maker means we can promise top-notch quality and the right fit for our repair services.</div>
					<a href="#" class="home_screenrepair_block_btn common_btn">Get a Quote</a>
				</div>
			</div>
			<div class="col-lg-4 home_parts_block">
				<div class="home_parts_block_inner position-relative overflow-hidden">
					<img src="/assets/frontend/images/parts_img2.png" alt="" />
					<div class="home_parts_block_heading text-white">Fast Turnaround Time for Galaxy Screen Repairs</div>
					<div class="home_parts_block_text">At our Samsung repair center, we know how important it is to get your device back to you fast. We work hard to make sure our samsung galaxy screen repair services are quick. This way, you can get back to using your Samsung Galaxy without delay.</div>
					<a href="#" class="home_screenrepair_block_btn common_btn">Get a Quote</a>
				</div>
			</div>
			<div class="col-lg-4 home_parts_block pe-lg-0">
				<div class="home_parts_block_inner position-relative overflow-hidden">
					<img src="/assets/frontend/images/parts_img3.png" alt="" />
					<div class="home_parts_block_heading text-white">Our Expertise in Samsung Galaxy Screen Replacement</div>
					<div class="home_parts_block_text">At our Samsung repair center in Australia, we're proud of our years of experience. We offer top-notch screen repair services for many Samsung Galaxy models. Our certified technicians are experts at fixing screen problems, making sure your device works perfectly again.</div>
					<a href="#" class="home_screenrepair_block_btn common_btn">Get a Quote</a>
				</div>
			</div>
		</div>
	</div>
</div>



<div class="home_methodology_section">
	<div class="container">
		<div class="home_screenrepair_section_heading text-center">Step-by-Step Breakdown of Our <strong>Repair Methodology</strong></div>
		<div class="row">
			<div class="col home_methodology_box">
				<div class="home_methodology_box_number">1</div>
				<div class="home_methodology_box_heading">Initial Inspection</div>
				<div class="home_methodology_box_text">Our experts look at your device to see how damaged it is and what to do next.</div>
			</div>
			<div class="col home_methodology_box">
				<div class="home_methodology_box_number">2</div>
				<div class="home_methodology_box_heading">Disassembly</div>
				<div class="home_methodology_box_text">We take apart your Samsung Galaxy carefully to avoid making more damage.</div>
			</div>
			<div class="col home_methodology_box">
				<div class="home_methodology_box_number">3</div>
				<div class="home_methodology_box_heading">Screen Replacement</div>
				<div class="home_methodology_box_text">We use genuine Samsung parts to put in a new screen. It fits perfectly and works great.</div>
			</div>
			<div class="col home_methodology_box">
				<div class="home_methodology_box_number">4</div>
				<div class="home_methodology_box_heading">Reassembly</div>
				<div class="home_methodology_box_text">We put your device back together with care, making sure everything works right.</div>
			</div>
			<div class="col home_methodology_box">
				<div class="home_methodology_box_number">5</div>
				<div class="home_methodology_box_heading">Testing and Quality Assurance</div>
				<div class="home_methodology_box_text">We test your device a lot before giving it back. This makes sure the screen, touch, and everything else works perfectly.</div>
			</div>
		</div>
	</div>
</div>



<div class="home_contact_section">
	<div class="container">
		<div class="row">
			<div class="col-lg-6">
				<div class="home_screenrepair_section_heading">Frequently Asked <strong>Questions</strong></div>
				<div class="accordion home_feq_content" id="accordionExample">
					<div class="accordion-item">
						<h2 class="accordion-header">
							<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What kind of Samsung Galaxy screen repair services do you offer?</button>
						</h2>
						<div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
							<div class="accordion-body">Our Samsung repair center specializes in fixing a wide range of Samsung Galaxy devices. If your screen is cracked, damaged, or not working right, our certified techs can fix it. They make sure your device works like new again.</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 class="accordion-header">
							<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What sets your Samsung Galaxy screen repair service apart?</button>
						</h2>
						<div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
							<div class="accordion-body">Our Samsung repair center in Australia has a lot of experience with Samsung Galaxy screens. Our certified techs are great at finding and fixing screen problems. They make sure your device works perfectly again.</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 class="accordion-header">
							<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Can you explain your Samsung Galaxy screen repair process?</button>
						</h2>
						<div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
							<div class="accordion-body">Our repair process is thorough and quick. We check the damage, fix it, and test it again to make sure it's done right. We pay close attention to every step to ensure your device is fixed with care.</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 class="accordion-header">
							<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How lo Locate Samsung repair near me?</button>
						</h2>
						<div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
							<div class="accordion-body">To find a nearby Samsung screen repair service:<br/><br/>Search Engines: Use Google and type "Samsung screen repair near me," including your city for better results.<br/>Maps Apps: Use Google Maps or Apple Maps. Search for "Samsung repair" or "phone repair" to find local options and reviews.<br/>Social Media: Look in local community groups on Facebook or Reddit for service recommendations.<br/>Samsung's Website: Visit Samsung’s site to use their service locator for authorized repair centers.<br/>Ask Around: Get recommendations from friends or family who have had similar repairs.<br/><br/>These steps will help you find a reliable service quickly.</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 class="accordion-header">
							<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">How quickly can I expect my Samsung Galaxy screen to be repaired?</button>
						</h2>
						<div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
							<div class="accordion-body">We know you want your device back fast. That's why we work quickly to fix screens. We aim for fast repairs so you can use your Samsung Galaxy again soon.</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 class="accordion-header">
							<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">How affordable are your Samsung Galaxy screen repair services?</button>
						</h2>
						<div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
							<div class="accordion-body">We think quality screen repairs should be affordable for everyone. We offer good prices for our services. You get great value without sacrificing repair quality.</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6 ps-lg-5">
				<div class="home_contact_form_box">
					<div class="home_screenrepair_section_heading text-white">Contact Us</div>
					<div class="row home_form">
						<div class="col-lg-6"><input type="text" class="form-control" placeholder="Name"/></div>
						<div class="col-lg-6"><input type="email" class="form-control" placeholder="Email"/></div>
						<div class="col-lg-6"><input type="text" class="form-control" placeholder="Phone"/></div>
						<div class="col-lg-6">
							<select class="form-control">
								<option>Select Repair Service</option>
								<option>Screen Replacement</option>
								<option>Charging Port Replacement</option>
								<option>Camera Lens Cover Replacement</option>
								<option>Rear Glass Replacement</option>
								<option>Battery Replacement</option>
							</select>
						</div>
						<div class="col-lg-12"><textarea class="form-control" placeholder="Message" rows="4"></textarea></div>
						<div class="col-lg-12"><button type="submit" class="home_form_btn border-0 common_btn">Submit Now</button></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>



<div class="home_location_section">
	<div class="container">
		<div class="home_screenrepair_section_heading text-center">Area We Serve For <strong>Samsung Repairs</strong></div>
		<div class="row">
			<div class="col-lg-4 home_location_list">
				<ul>
					<li><a href="#">Samsung Repairs in Albion</a></li>
					<li><a href="#">Sasmung Repairs in Alderley</a></li>
					<li><a href="#">Sasmung Repairs in Algester</a></li>
					<li><a href="#">Samsung Repairs in Annerley</a></li>
					<li><a href="#">Sasmung Repairs in Anstead</a></li>
					<li><a href="#">Samsung Repairs in Archerfield</a></li>
					<li><a href="#">Samsung Repairs in Ascot</a></li>
				</ul>
			</div>
			<div class="col-lg-4 home_location_list">
				<ul>
					<li><a href="#">Samsung Repairs in Ashgrove</a></li>
					<li><a href="#">Samsung Repairs in Aspley</a></li>
					<li><a href="#">Samsung Repairs in Auchenflower</a></li>
					<li><a href="#">Samsung Repairs in Bald Hills</a></li>
					<li><a href="#">Samsung Repairs in Balmoral</a></li>
					<li><a href="#">Samsung Repairs in Creek</a></li>
					<li><a href="#">Samsung Repairs in Banyo</a></li>
				</ul>
			</div>
			<div class="col-lg-4 home_location_list">
				<ul>
					<li><a href="#">Samsung Repairs in Bardon</a></li>
					<li><a href="#">Samsung Repairs in Bellbowrie</a></li>
					<li><a href="#">Samsung Repairs in Belmont</a></li>
					<li><a href="#">Samsung Repairs in Boondall</a></li>
					<li><a href="#">Samsung Repairs in Bowen Hills</a></li>
					<li><a href="#">Samsung Repairs in Bracken Ridge</a></li>
					<li><a href="#">Samsung Repairs in Bridgeman</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>




	</div>
        )
    }

    export default Home;