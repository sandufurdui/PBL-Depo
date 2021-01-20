import React from "react";
import s from "./guide.module.css";

export default function Guide() {
	return (
		<>
			<section className={s.imageSection}>
				<img
					className={s.image}
					src="assets/img/pbl-depo-assets_guide.png"
					alt=""
				/>
			</section>

			<section className={s.infoSection}>
				<div className={s.pblInfo}>
					<h1>What is PBL ?</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Debitis alias iste cumque fuga qui, libero quidem
						temporibus eligendi dolorem similique doloremque,
						tenetur facere amet est excepturi molestiae at quaerat
						obcaecati sit minima omnis accusantium, harum fugiat
						pariatur! Necessitatibus expedita exercitationem rem
						facilis vero corporis. Earum tempore eum, alias error
						suscipit corporis porro asperiores temporibus odio quae
						ipsam est reprehenderit culpa maxime eveniet quis fugiat
						laudantium ex facilis aperiam ut! Veniam, deleniti.
						Sapiente totam corrupti deserunt rerum, beatae possimus
						omnis expedita, aliquid aut quos numquam eveniet a
						dolorem, aliquam iure veniam reprehenderit assumenda
						officia non! Nemo quidem sapiente sunt dignissimos hic.
					</p>
				</div>
				<div className={s.startGuide}>
					<h1>How to start?</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Illo inventore asperiores aperiam similique ipsa.
						Perspiciatis, repellendus officia! Fugiat odit, maiores
						reprehenderit debitis quaerat sit eaque quam quae
						dignissimos, eius in totam officia adipisci quibusdam ab
						rerum maxime. Cumque vitae animi quis tempora corporis
						similique modi in ducimus nulla debitis! Deserunt aut
						quo amet illo excepturi quidem explicabo placeat
						recusandae porro suscipit expedita repudiandae obcaecati
						tempore id libero, magnam laudantium eaque ipsum ducimus
						incidunt aliquid commodi et a? Dolor tempora ipsa,
						debitis omnis magni voluptatem vel! Nam cum voluptatem
						nostrum, voluptas tenetur impedit in vitae voluptate
						doloremque a beatae ea consectetur.
					</p>
				</div>
			</section>

			<section className={s.topicsSection}>
				<div className={s.topics}>
					<div className={s.topic}>
						<div className={s.topicDefault}>
							<h1>YEAR I</h1>
						</div>
						<div className={s.topicHover}>
							<div>
								<h3>VIIth Semester</h3>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
							<div>
								<h3>VIIIth Semester</h3>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
					</div>

					<div className={s.topic}>
						<div className={s.topicDefault}>
							<h1>YEAR II</h1>
						</div>
						<div className={s.topicHover}>
							<div>
								<h3>VIIth Semester</h3>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
							<div>
								<h3>VIIIth Semester</h3>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
					</div>

					<div className={s.topic}>
						<div className={s.topicDefault}>
							<h1>YEAR III</h1>
						</div>
						<div className={s.topicHover}>
							<div>
								<h3>VIIth Semester</h3>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
							<div>
								<h3>VIIIth Semester</h3>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
					</div>

					<div className={s.topic}>
						<div className={s.topicDefault}>
							<h1>YEAR IV</h1>
						</div>
						<div className={s.topicHover}>
							<div>
								<h3>VIIth Semester</h3>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
							<div>
								<h3>VIIIth Semester</h3>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={s.mentorsSection}>
				<nav>
					<div className="nav nav-tabs" id="nav-tab" role="tablist">
						<a
							className={`nav-item nav-link active ${s.mentorsNavLink}`}
							id="nav-home-tab"
							data-toggle="tab"
							href="#nav-home"
							role="tab"
							aria-controls="nav-home"
							aria-selected="true"
						>
							Who are the Mentors?
						</a>
						<a
							className={`nav-item nav-link ${s.mentorsNavLink}`}
							id="nav-profile-tab"
							data-toggle="tab"
							href="#nav-profile"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Ion Ion
						</a>
						<a
							className={`nav-item nav-link ${s.mentorsNavLink}`}
							id="nav-contact-tab"
							data-toggle="tab"
							href="#nav-contact"
							role="tab"
							aria-controls="nav-contact"
							aria-selected="false"
						>
							Dan Dan
						</a>
					</div>
				</nav>

				<div className={`tab-content`} id="nav-tabContent">
					<div
						className={`tab-pane fade show active ${s.tabContent}`}
						id="nav-home"
						role="tabpanel"
						aria-labelledby="nav-home-tab"
					>
						<div className={s.mentorsDetails}>
							<div className={s.mentorInfo}>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Alias ea iste quam dicta
								doloribus cumque hic, sit obcaecati placeat
								porro quisquam reprehenderit tempora earum amet
								quibusdam! Tempore quaerat dolorem in neque
								labore illum vel laboriosam fugit nostrum sed
								harum facilis officia eius hic, voluptate quo
								earum ad veniam a atque, sit, aspernatur sint!
								Recusandae asperiores cum quisquam delectus
								maxime culpa, voluptatem odit quia odio quas
								quas modi quis, dolor sit harum deleniti
								quaerat. Quae eum atque unde perferendis,
								deleniti ab molestiae modi! Maxime voluptate
								corporis est, eveniet minima velit quasi.
							</div>
							<div className={s.socialIcons}>
								<i
									className={`fab fa-twitter fa-lg ${s.icon}`}
								></i>
								<i
									className={`fas fa-envelope fa-lg ${s.icon}`}
								></i>
								<i
									className={`fab fa-facebook-square fa-lg ${s.icon}`}
								></i>
								<i
									className={`fab fa-github-square fa-lg ${s.icon}`}
								></i>
							</div>
						</div>
					</div>
					<div
						className={`tab-pane fade show ${s.tabContent}`}
						id="nav-profile"
						role="tabpanel"
						aria-labelledby="nav-profile-tab"
					>
						<div className={s.mentorsDetails}>
							<div className={s.mentorInfo}>
								<strong>Current Position: </strong>Lorem ipsum
								dolor sit.
								<br />
								<strong>Email: </strong>Lorem, ipsum.
							</div>
							<div className={s.socialIcons}>
								<i
									className={`fab fa-twitter fa-lg ${s.icon}`}
								></i>
								<i
									className={`fas fa-envelope fa-lg ${s.icon}`}
								></i>
								<i
									className={`fab fa-facebook-square fa-lg ${s.icon}`}
								></i>
								<i
									className={`fab fa-github-square fa-lg ${s.icon}`}
								></i>
							</div>
						</div>
					</div>
					<div
						className={`tab-pane fade show ${s.tabContent}`}
						id="nav-contact"
						role="tabpanel"
						aria-labelledby="nav-contact-tab"
					>
						<div className={s.mentorsDetails}>
							<div className={s.mentorInfo}>
								<strong>Current Position: </strong>Lorem ipsum
								dolor sit.
								<br />
								<strong>Email: </strong>Lorem, ipsum.
							</div>
							<div className={s.socialIcons}>
								<i
									className={`fab fa-twitter fa-lg ${s.icon}`}
								></i>
								<i
									className={`fas fa-envelope fa-lg ${s.icon}`}
								></i>
								<i
									className={`fab fa-facebook-square fa-lg ${s.icon}`}
								></i>
								<i
									className={`fab fa-github-square fa-lg ${s.icon}`}
								></i>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
