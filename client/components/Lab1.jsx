import React from 'react';

import './Lab1.css';
import './reset.css';

const Lab1 = () => {
  return (
	<div id="wrapper">
		<div className="conteiner">
			{/* Header */}
			<header className="header">
				{/*  LOGO */}
				<div className="logo">
					<div href="#">kinobase<span>.ru</span></div>
					<div><p>Открой мир кино с нами</p></div>
				</div>
				{/*  MENU */}
				<div className="primary-menu">
					<ul>
						<li><a href="#">кино</a></li>
						<li><a href="#">сериалы</a></li>
						<li><a href="#">афиша</a></li>
						<li><a href="#">тексты</a></li>
						<li><a href="#">рейтинги</a></li>
						<li><a href="#">программы и шоу</a></li>
					</ul>
				</div>
				<div className="search-container">
					{/*  PROFILE */}
					<div className="profile">
						<img src="images/triangle_profile.png" alt="" id="triangle_profile"/>
						<a href="#">Создать аккаунт</a>
						<p>|</p>
						<a href="#">Войти</a>
						{/*  SEARCH */}
						<a id="search" href="#">Поиск</a>
						<img src="images/login_button_shadow1.png" alt="" id="login_button_shadow1"/>
						<img src="images/login_button_shadow2.png" alt="" id="login_button_shadow2"/>
						<form>
							<input type="text" name="search" placeholder="Что будем искать?"/>
							<img src="images/login_field_triangle_frame1.png" alt="" id="login_field_triangle_frame1"/>
							<img src="images/login_field_triangle_frame2.png" alt="" id="login_field_triangle_frame2"/>
							<p id="search_a">расширенный поиск <span>■</span> что ищут?</p>
						</form>
					</div>
					<div className="grey">
						<div className="white">
							<p>Рейтинг ожиданий</p>
						</div>
					</div>
					{/*  SLIDER */}
					<div className="slider_conteiner">
						<div className="sider_grey">
							<div className="slider">
								<img src="images/slider_bottom_triangle.png" id="slider_bottom_triangle"/>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/*  BODY */}
			<div className="body">
				<div className="text_after_slider">Пусть к вам проникнет наше настроение и останется только хороше впечатление! <span>Наслаждайтесь просмотром!</span></div>
				{/*  RECOMMENDED FILMS */}
				<div className="head_left_side_conteiner">
					<div className="recommended">
						<div className="first">
							<p>Новый Человек-паук (2012)</p>
							<img className="recommended_left" src="images/recommended_left.png" alt=""/>
							<div className="image_conteiner">
								<img src="images/rec1.jpeg" alt=""/>
								<img src="" alt="" id=""/>
							</div>
							<p>Получив сверхчеловеческие способности, Питер Паркер пытается вести нормальную жизнь и разобраться, кем же он теперь стал...</p>
							<div className="button"><a href="#">Смотреть сейчас</a></div>
						</div>
						<div className="second">
							<p>Авраам Линкольн: Охотник на вампиров (2012)</p>
							<div className="images_conteiner">
								<img src="images/rec2.jpeg" alt=""/>
								<img src="" alt="" className="star"/>
								<img src="" alt="" id=""/>
							</div>
							<p>Убита мать президента Линкольна, и все указывает на вампиров. После этой трагедии Линкольн объявляет войну до полного уничтожения ...</p>
							<div className="button"><a href="#">Смотреть сейчас</a></div>
						</div>
						<div className="third">
							<p>Темный рыцарь: Возрождение легенды (2012)</p>
							<div className="image_conteiner">
								<img src="images/rec3.jpeg" alt=""/>
								<img src="" alt="" className="star"/>
								<img src="" alt="" id=""/>
							</div>
							<p>Восемь лет спустя после событий Темного Рыцаря, в Готэм приходит новый лидер террористов, Бэйн, неся с собой хаос и разрушения ...</p>
							<div className="button"><a href="#">Смотреть сейчас</a></div>
						</div>
					</div>
					<div className="head_left_side_outline">
						<div className="head_left_side">
							<img src="images/side_h.png" alt=""/>
							<p>Обновления <span>на сайте</span></p>
							<div className="one_film">
								<img src="images/lside1.jpeg" alt=""/>
								<div className="film_description">
									<p className="one_f">G.I. Joe: Бросок кобры 2 (2012)</p>
									<p>G.I. Joe: Retaliation</p>
									<p>Жанр: Триллер, Боевик, Фантастика, Приключения</p>
								</div>
							</div>
							<div className="one_film two_film" id="two_film_border">
								<img src="images/lside2.jpeg" alt=""/>
								<div className="film_description">
									<p className="one_f two_f">Леднековый период 4: Континентальный дрейф (2012)</p>
									<p>Жанр: Мультфильм</p>
								</div>
							</div>
							<div className="borderw head_left_side_button">
								<a href="#">Смотреть все обновления...</a>
								<img src="images/lside_langle_logo.png" alt=""/>
							</div>
						</div>
					</div>
				</div>
				<div id="one_of_three">
					<div className="content left_side">
						<div className="lside_positioner">
							<div>
								<img src="images/lside1_poster.jpeg" alt=""/>
							</div>
							<ul>
								<li>Актеры:</li>
								<li>Джейсон Стэтхэм, Дональд Сазерленд, Бен Фостер, Тони Голдуин, Джефф Чейз, Мини Анден, Джеймс Логан, Эдди Дж. Фернандез, Джошуа Бриджуотер, Джон МакКоннелл</li>
								<li>Продюссер:</li>
								<li>Рене Бессон, Роберт Чартофф, Уильям Чартофф, Роб Кауэн</li>
								<li>Режиссер:</li>
								<li>Саймон Уэст</li>
								<li>Сценарист:</li>
								<li>Льюис Джон Карлино, Ричард Уэнк</li>
								<li>Бюджет:</li>
								<li>$40 000 000</li>
								<li>Сборы в мире:</li>
								<li>$51 070 807</li>
								<li>Сборы в США:</li>
								<li>$29 121 498</li>
								<li>Релиз на DVD:</li>
								<li>25 февраля 2011</li>
							</ul>
						</div>{/*  end lside_positioner */}
					</div>{/*  end left_side */}
					<div className="content general_conteiner">
						<div className="general_conteiner_head">
								<p>МЕХАНИК</p>
								<p>THE MECHANIC</p>
								<ul>
									<li>Год выпуска:</li>
									<li>2010</li>
									<li>Страна:</li>
									<li>США</li>
									<li>Жанр:	</li>
									<li>Боевики, Триллеры, Криминал</li>
									<li>Продолжительность:</li>
									<li>89 мин.</li>
									<li>Рейтинг фильма:</li>
									<li>MDB: 6.5 Кинопоиск: 6.72</li>
								</ul>
								<p id="center_about1">Сюжет:</p>
								<p id="center_about2">Артур Бишоп очень хорошо знает свое дело. А дело его – убивать. Он наемник, лучший среди лучших. Артур всегда работает один, но ему приходится сотрудничать с молодым парнем. Теперь они команда. Вот только им все равно предстоит вступить в бой друг с другом, из которого хотя бы одному не уйти живым.</p>
						</div>
						<div className="general_conteiner_video">
							<img src="images/general_video.jpeg" alt=""/>
						</div>
						<div className="general_conteiner_comments">
							<div className="comments">
								<div className="border comment_1">
									<div className="border profile_img"><a href="#">Ответить</a></div>
									<div className="border comment_self">
										<div className="border comment comments_top">
											<div><img src="images/profile_icon.png" alt=""/></div>
											<div>TritonGrown</div>
											<div>26.05.2012 в 18:40</div>
										</div>
										<div className="border comments_bottom">
											<div>Фельмище супер,а для тех кто любит гонки вообще найлучшое что может бить.Для семейного просмотра тоже идеал.Фильм + 5</div>
										</div>
									</div>
								</div>
								<div className="border comment_2 ">
									<div className="border profile_img"><a href="#">Ответить</a></div>
									<div className="border comment_self comment_self2">
										<div className="border comment comments_top comments_top2">
											<div><img src="images/profile_icon.png" alt=""/></div>
											<div>TritonGrown</div>
											<div>26.05.2012 в 18:40</div>
										</div>
										<div className="border comments_bottom comments_bottom2">
											<div>Согласен с тобой))) фильм отличный ))) мне тоже понравился. Советую посмотреть!!!</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="border write_comment_conteiner">
							<div className="write_comment">
								<div className="border write_comment_top">
									<input type="text" name="comment" placeholder="текст..." />
								</div>
								<div className="border write_comment_bottom ">
									<a href="#">Отправить сообщение</a>
								</div>
							</div>
						</div>
						<div className="border pagination">
							<a href="#" className="border pagination_first">1</a>
							<a href="#" className="border pagination_nth">2</a>
							<a href="#" className="border pagination_nth">3</a>
							<a href="#" className="border pagination_nth">4</a>
						</div>
					</div>{/*  end general_conteiner */}
					<div className="content right_side">
						<div className="borderw rs_first">
							<div className="borderw rs_head">
								<img src="images/right_side_head_tr.png" alt=""/>
								<p>Кинокасса России • <span>руб.</span></p>
							</div>
							<div className="box">
								<ol>
									<li>Люди в черном 3</li>
									<li>Men in Black III</li>
									<li>533 050 190</li>
									<li>Запретная зона</li>
									<li>Chernobyl Diaries</li>
									<li>45 965 000</li>
									<li>Диктатор</li>
									<li>The Dictator</li>
									<li>33 295 425</li>
									<li>Мрачные тени</li>
									<li>Dark Shadows</li>
									<li>19 700 249</li>
									<li>Мстители</li>
									<li>The Avengers</li>
									<li>18 684 876</li>
								</ol>
							</div>
						</div>
						<div className="borderw rs_second">
							<div className="rs_head">
								<img src="images/right_side_head_tr.png" alt=""/>
								<p>Последние коментарии</p>
							</div>
							<div className="last_comments">
								<div className="borderw last_com">
									<p>Рыцарь дня</p>
									<p>Давно пройшли часи лицарства і героїзму, коли лише за посмішку благородної дами творилися подвиги. Крістофер Нолан вдихнув нове життя в філософію рицарства.</p>
								</div>
								<div className="borderw last_com">
									<p>Неудержимые</p>
									<p>Нестримні/The Expendables - Хоч про це вже казано і переказано, але...Сталоне, Стетхем, Джет Лі, Брюс Віліс, Мікі Рурк, Арнольд Шварцнегер у одному фільмі. Ви колись таке чули чи бачили? </p>
								</div>
							</div>
						</div>
						<div className="borderw rs_third">
							<div className="rs_head">
								<img src="images/right_side_head_tr.png" alt=""/>
								<p>Запросы — фильмы <span>всего</span></p>
							</div>
							<div className="request_film">
								<ul>
									<li>Прометей</li>
									<li>Prometheus</li>
									<li>31.05</li>
									<li>Мадагаскар 3</li>
									<li>Madagascar 3: Europe's Most Wanted</li>
									<li>07.06</li>
									<li>Белоснежка и охотник</li>
									<li>Snow White and the Huntsman</li>
									<li>14.06</li>
									<li>Президент Линкольн: Охотник на вампиров</li>
									<li>Abraham Lincoln: Vampire Hunter</li>
									<li>21.06</li>
									<li>Лето. Одноклассники. Любовь</li>
									<li>LOL</li>
									<li>28.06</li>
								</ul>
							</div>
						</div>{/*  end rs_third */}
						<div className="borderw rs_fourth">
							<p>случайный фильм</p>
							<div>
								<img src="images/lside_random_film.jpeg" alt=""/>
								<div id="rs_fourth_translucent">Морской бой</div>
							</div>
							<p id="rs_fourth_bootom_text">другой случайный фильм</p>
						</div>
					</div>{/*  end right_side */}
				</div>{/*  end one_of_three */}
				</div>
			</div>
			<div className="footer_grey">
				<img id="footer_triangle" src="images/footer_triangle.png" alt=""/>
				<div className="footer">
					<div className="border footer_info ">
						<div className="border footer_block" id="foo_bl1">
							<ul>
								<li>Фильмы</li>
								<li><a href="#">База фильмов</a></li>
								<li><a href="#">Афиша</a></li>
								<li><a href="#">В кинотеатрах</a></li>
								<li><a href="#">Скоро</a></li>
								<li><a href="#">Аниме</a></li>
							</ul>
						</div>
						<div className="border footer_block" id="foo_bl2">
							<ul>
								<li>Люди</li>
								<li><a href="#">Актеры</a></li>
							</ul>
						</div>
						<div className="border footer_block" id="foo_bl3">
							<ul>
								<li>Мультимедиа</li>
								<li><a href="#">Трейлеры</a></li>
								<li><a href="#">Фото</a></li>
								<li><a href="#">Обои</a></li>
								<li><a href="#">Саундтреки</a></li>
							</ul>
						</div>
						<div className="border footer_block" id="foo_bl4">
							<ul>
								<li>Общение</li>
								<li><a href="#">Форум</a></li>
							</ul>
						</div>
						<div className="border footer_block" id="foo_bl5">
							<ul>
								<li>Рейтинги</li>
								<li><a href="">Лучшие фильмы</a></li>
								<li><a href="">Вох Office</a></li>
							</ul>
						</div>
						<div className="border footer_block" id="foo_bl6">
							<ul>
								<li>Новости</li>
								<li><a href="">Новости кино</a></li>
							</ul>
						</div>
						<div className="border footer_block" id="foo_bl7">
							<ul>
								<li>Пользователи</li>
								<li><a href="">Регистрация</a></li>
								<li><a href="">Войти на сайт</a></li>
							</ul>
						</div>
						<div className="border footer_block" id="foo_bl8">
							<ul>
								<li>Контакты</li>
								<li><a href="">Форма обратной связи</a></li>
								<li><a href="">Реклама на kinobase </a></li>
							</ul>
						</div>
						<div className="footer_bottom">
							<div>
								<div id="footer" href="#">kinobase<span>.ru</span></div>
								<img src="images/logo_studio.png" alt=""/>
							</div>
						</div>
						<div>
							<p id="copy">Верстка дизайна — Dmytrii Lysak | Desing by WebGod Stidio | Хостинг от uCoz | Все материалы принадлежат их авторам. Копирование дизайна сайта незапрещено.</p>
						</div>
					</div> {/* end footer_info */}
				</div>
		</div>
	</div>
  );
}
export default Lab1;