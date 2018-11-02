<?php $urlNow = $_SERVER["REQUEST_URI"]; 
	if(strlen($urlNow) > 15): ?>
<header class="main-header" id="header">
	<div class="container">
		<nav class="main-nav">
			<span class="open-menu">Меню 
			<svg width="30" height="16">
				<line x1="2" y1="2" x2="28" y2="2" />
				<line x1="2" y1="8" x2="28" y2="8" />
				<line x1="2" y1="14" x2="28" y2="14" />
			</svg>
			</span>
			<ul class="nav-list">
				<li class="nav-item"><a href="../" class="nav-link">Главная</a></li>
				<li class="nav-item"><a href="../services" class="nav-link">Услуги</a></li>
				<li class="nav-item"><a href="../prices" class="nav-link">Цены</a></li>
				<li class="nav-item"><a href="../contacts" class="nav-link">Контакты</a></li>
				<li class="nav-item"><a href="../portfolio.php" class="nav-link">Наши работы</a></li>
			</ul>
		</nav>
		<p class="main-header_btn open-popup">Перезвоним</p>
	</div>
</header>
	<?php else: ?>
<header class="main-header" id="header">
	<div class="container">
		<nav class="main-nav">
			<span class="open-menu">Меню 
			<svg width="30" height="16">
				<line x1="2" y1="2" x2="28" y2="2" />
				<line x1="2" y1="8" x2="28" y2="8" />
				<line x1="2" y1="14" x2="28" y2="14" />
			</svg>
			</span>
			<ul class="nav-list">
				<li class="nav-item"><a href="/" class="nav-link">Главная</a></li>
				<li class="nav-item"><a href="services" class="nav-link">Услуги</a></li>
				<li class="nav-item"><a href="prices" class="nav-link">Цены</a></li>
				<li class="nav-item"><a href="contacts" class="nav-link">Контакты</a></li>
				<li class="nav-item"><a href="portfolio.php" class="nav-link">Наши работы</a></li>
			</ul>
		</nav>
		<p class="main-header_btn open-popup">Перезвоним</p>
	</div>
</header>
<?php endif; ?>