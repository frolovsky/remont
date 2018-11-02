$(document).ready(function() {
	$('.prices-list').append('<table class="prices-table"><thead class="table-header"><tr><th class="th-num">№</th><th class="th-name">Наименование услуги</th><th class="th-unit">Ед. изм.</th><th class="th-price">Цена</th><th class="th-amount">Объем</th><th class="th-total">Итого</th></tr></thead><tr><th colspan="6" class="th-section" data-lp="">Потолки</th></tr><tbody class="table-section"><tr><td>1</td><td class="td-name">Очистка от старых обоев</td><td>м<span class="min-up">2</span></td><td class="td-price">100</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>2</td><td class="td-name">Очистка от шпатлевки или краски</td><td>м<span class="min-up">2</span></td><td class="td-price">140</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>3</td><td class="td-name">Огрунтовка</td><td>м<span class="min-up">2</span></td><td class="td-price">50</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>4</td><td class="td-name">Оштукатуривание  слоем до 1,5 см</td><td>м<span class="min-up">2</span></td><td class="td-price">470</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>5</td><td class="td-name">Шпатлевка  в три слоя (финишная)</td><td>м<span class="min-up">2</span></td><td class="td-price">350</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>6</td><td class="td-name">Ошкуривание</td><td>м<span class="min-up">2</span></td><td class="td-price">80</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>7</td><td class="td-name">Устройство армировочной сетки</td><td>м<span class="min-up">2</span></td><td class="td-price">80</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>8</td><td class="td-name">Проклейка швов и стыков серпянкой</td><td>м.п.</td><td class="td-price">70</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>9</td><td class="td-name">Оклейка  стеклохолстом</td><td>м<span class="min-up">2</span></td><td class="td-price">160</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>10</td><td class="td-name">Оклейка обоями</td><td>м<span class="min-up">2</span></td><td class="td-price">260</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>11</td><td class="td-name">Оклеивание пробковым покрытием</td><td>м<span class="min-up">2</span></td><td class="td-price">390</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>12</td><td class="td-name">Установка и покраска потолочного плинтуса</td><td>м.п.</td><td class="td-price">110</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>13</td><td class="td-name">Окраска  в два слоя</td><td>м<span class="min-up">2</span></td><td class="td-price">180</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>14</td><td class="td-name">Устройство потолка из гипсокартона в одном уровне</td><td>м<span class="min-up">2</span></td><td class="td-price">540</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>15</td><td class="td-name">Устройство потолка из гипсокартона в двух уровнях</td><td>м<span class="min-up">2</span></td><td class="td-price">750</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>16</td><td class="td-name">Устройство подвесного реечного потолка</td><td>м<span class="min-up">2</span></td><td class="td-price">750</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>17</td><td class="td-name">Устройство подвесного кассетного потолка</td><td>м<span class="min-up">2</span></td><td class="td-price">550</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>18</td><td class="td-name">Устройство натяжного потолка</td><td>м<span class="min-up">2</span></td><td class="td-price">800</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr></tbody><tr><th colspan="6" class="th-section">Стены</th></tr><tbody class="table-section"><tr><td>1</td><td class="td-name">Снос перегородок из пеноблоков, гипса, ацеита</td><td> м<span class="min-up">2</span></td><td class="td-price">290</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>2</td><td class="td-name">Очистка от старых обоев</td><td> м<span class="min-up">2</span></td><td class="td-price">90</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>3</td><td class="td-name">Очистка от шпатлевки или водоэм. краски</td><td> м<span class="min-up">2</span></td><td class="td-price">130</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>4</td><td class="td-name">Демонтаж керамической плитки</td><td> м<span class="min-up">2</span></td><td class="td-price">160</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>5</td><td class="td-name">Возведение перегородок из блоков</td><td> м<span class="min-up">2</span></td><td class="td-price">640</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>6</td><td class="td-name">Устройство теплоизолирующих плит</td><td> м<span class="min-up">2</span></td><td class="td-price">170</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>7</td><td class="td-name">Устройство перегородок из гипсокартона с каркасом в один слой</td><td> м<span class="min-up">2</span></td><td class="td-price">600</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>8</td><td class="td-name">Устройство арки из гипсокартона</td><td> шт</td><td class="td-price">3000</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>9</td><td class="td-name">Огрунтовка</td><td> м<span class="min-up">2</span></td><td class="td-price">50</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>10</td><td class="td-name">Оштукатуривание слоем до 3 см по маякам</td><td> м<span class="min-up">2</span></td><td class="td-price">40</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>11</td><td class="td-name">Шпатлевка в один слой</td><td> м<span class="min-up">2</span></td><td class="td-price">140</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>12</td><td class="td-name">Шпатлевка  в два слоя</td><td> м<span class="min-up">2</span></td><td class="td-price">240</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>13</td><td class="td-name">Устройство армировочной сетки</td><td> м<span class="min-up">2</span></td><td class="td-price">70</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>14</td><td class="td-name">Окраска в два слоя</td><td> м<span class="min-up">2</span></td><td class="td-price">180</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>15</td><td class="td-name">Оклейка стеклохолстом</td><td> м<span class="min-up">2</span></td><td class="td-price">140</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>16</td><td class="td-name">Оклейка виниловыми и бумажными обоями</td><td> м<span class="min-up">2</span></td><td class="td-price">250</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>17</td><td class="td-name">Оклейка обоями с подбором рисунка</td><td> м<span class="min-up">2</span></td><td class="td-price">240</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>18</td><td class="td-name">Оклейка обоями без подбора рисунка</td><td> м<span class="min-up">2</span></td><td class="td-price">220</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>19</td><td class="td-name">Оклейка флизелиновыми обоями под покраску</td><td> м<span class="min-up">2</span></td><td class="td-price">220</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>20</td><td class="td-name">Облицовка пластиковыми панелями</td><td> м<span class="min-up">2</span></td><td class="td-price">500</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>21</td><td class="td-name">Облицовка керамической плиткой (зависит от размера плитки)</td><td> м<span class="min-up">2</span></td><td class="td-price">850</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>22</td><td class="td-name">Укладка мозаики</td><td> м<span class="min-up">2</span></td><td class="td-price">1200</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>23</td><td class="td-name">Облицовка плиткой из керамогранита</td><td> м<span class="min-up">2</span></td><td class="td-price">950</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>24</td><td class="td-name">Затирка швов мозаики</td><td> м<span class="min-up">2</span></td><td class="td-price">180</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>25</td><td class="td-name">Затирка швов</td><td> м<span class="min-up">2</span></td><td class="td-price">50</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>26</td><td class="td-name">Устройство керамического бордюра</td><td> м.п.</td><td class="td-price">280</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr></tbody><tr><th colspan="6" class="th-section">Полы</th></tr><tbody class="table-section"><tr><td>1</td><td class="td-name">Снятие линолеума</td><td> м<span class="min-up">2</span></td><td class="td-price">100</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>2</td><td class="td-name">Демонтаж ламината</td><td> м<span class="min-up">2</span></td><td class="td-price">120</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>3</td><td class="td-name">Демонтаж стяжки толщиной до 5 см</td><td> м<span class="min-up">2</span></td><td class="td-price">200</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>4</td><td class="td-name">Устройство наливного пола</td><td> м<span class="min-up">2</span></td><td class="td-price">250</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>5</td><td class="td-name">Устройство стяжки толщиной до 4 см</td><td> м<span class="min-up">2</span></td><td class="td-price">320</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>6</td><td class="td-name">Устройство стяжки толщиной до 8 см</td><td> м<span class="min-up">2</span></td><td class="td-price">640</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>7</td><td class="td-name">Устройство стяжки толщиной до 10 см</td><td> м<span class="min-up">2</span></td><td class="td-price">900</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>8</td><td class="td-name">Устройство стяжки из керамзитобетона</td><td> м<span class="min-up">2</span></td><td class="td-price">470</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>9</td><td class="td-name">Устройство пола из ГВЛ с сухой засыпкой</td><td> м<span class="min-up">2</span></td><td class="td-price">480</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>10</td><td class="td-name">Устройство пола из фанеры</td><td> м<span class="min-up">2</span></td><td class="td-price">350</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>11</td><td class="td-name">Укладка ламината</td><td> м<span class="min-up">2</span></td><td class="td-price">350</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>12</td><td class="td-name">Укладка паркетной доски</td><td> м.п.</td><td class="td-price">420</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>13</td><td class="td-name">Укладка линолеума</td><td> м.п.</td><td class="td-price">200</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>14</td><td class="td-name">Облицовка плиткой из керамогранита</td><td> м<span class="min-up">2</span></td><td class="td-price">950</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>15</td><td class="td-name">Установка пластиковых плинтусов</td><td> м.п.</td><td class="td-price">100</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>16</td><td class="td-name">Установка деревянных плинтусов</td><td> м.п.</td><td class="td-price">140</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr></tbody><tr><th colspan="6" class="th-section">Двери и окна</th></tr><tbody class="table-section"><tr><td>1</td><td class="td-name">Очистка откосов от шпатлевки или краски</td><td> м.п.</td><td class="td-price">100</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>2</td><td class="td-name">Оштукатуривание откосов</td><td> м.п.</td><td class="td-price">270</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>3</td><td class="td-name">Шпатлевка откосов</td><td> м.п.</td><td class="td-price">220</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>4</td><td class="td-name">Окраска откосов</td><td> м.п.</td><td class="td-price">90</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>5</td><td class="td-name">Установка пластиковых откосов, подоконников</td><td> м.п.</td><td class="td-price">300</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>6</td><td class="td-name">Окраска оконного блока с зачисткой</td><td> м<span class="min-up">2</span></td><td class="td-price">2000</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>7</td><td class="td-name">Демонтаж однопольного дверного блока</td><td> шт.</td><td class="td-price">500</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>8</td><td class="td-name">Установка однопольного дверного блока</td><td> шт.</td><td class="td-price">1800</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>9</td><td class="td-name">Установка двупольного дверного блока</td><td> шт.</td><td class="td-price">3900</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>10</td><td class="td-name">Установка наличников</td><td> м.п.</td><td class="td-price">100</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>11</td><td class="td-name">Врезка замка</td><td> шт.</td><td class="td-price">400</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr></tbody><tr><th colspan="6" class="th-section">Электрика</th></tr><tbody class="table-section"><tr><td>1</td><td class="td-name">Штробление борозды в бетоне шириной до 3 см</td><td> м.п.</td><td class="td-price">300</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>2</td><td class="td-name">Штробление борозды в гипсе шириной до 3 см</td><td> м.п.</td><td class="td-price">140</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>3</td><td class="td-name">Штробление и установка подрозетника в гипсовых стенах</td><td> шт.</td><td class="td-price">170</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>4</td><td class="td-name">Штробление и установка подрозетника в кирпичных стенах</td><td> шт.</td><td class="td-price">250</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>5</td><td class="td-name">Штробление и установка подрозетника в бетонных стенах</td><td> шт.</td><td class="td-price">320</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>6</td><td class="td-name">Штробление под установку эл.щитков до 12 групп скрытая установка( без коммутации)</td><td> шт.</td><td class="td-price">1400</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>7</td><td class="td-name">Прокладка кабеля диаметром до 10 мм</td><td> м.п.</td><td class="td-price">60</td></tr><tr><td>8</td><td class="td-name">Прокладка кабеля в гофрорукаве</td><td> м.п.</td><td class="td-price">90</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>9</td><td class="td-name">Заделка кабеля</td><td> м.п.</td><td class="td-price">60</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>10</td><td class="td-name">Установка подрозетника</td><td> шт.</td><td class="td-price">70</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>11</td><td class="td-name">Установка розетки, выключателя</td><td> шт.</td><td class="td-price">120</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>12</td><td class="td-name">Установка эл.щитков слаботочной сети открытая установка</td><td> шт.</td><td class="td-price">600</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>13</td><td class="td-name">Установка автоматических выключателей</td><td> шт.</td><td class="td-price">180</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>14</td><td class="td-name">Установка УЗО, Диф автоматов</td><td> шт.</td><td class="td-price">240</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>15</td><td class="td-name">Монтаж электросчетчика</td><td> шт.</td><td class="td-price">600</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>16</td><td class="td-name">Подключение силового кабеля в щитке</td><td> шт.</td><td class="td-price">770</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>17</td><td class="td-name">Монтаж розетки электроплиты</td><td> шт.</td><td class="td-price">300</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>18</td><td class="td-name">Установка и подключение звонка</td><td> шт.</td><td class="td-price">500</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>19</td><td class="td-name">Установка вентилятора</td><td> шт.</td><td class="td-price">450</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>20</td><td class="td-name">Установка фильтров кухонных вытяжных (Вытяжка)</td><td> шт.</td><td class="td-price">800</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>21</td><td class="td-name">Установка эл.полотенцесушителя</td><td> шт.</td><td class="td-price">1600</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>22</td><td class="td-name">Установка и подключение видеокамеры (видеоглазка)</td><td> шт.</td><td class="td-price">600</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>23</td><td class="td-name">Установка и подключение видеодомофона</td><td> м<span class="min-up">2</span></td><td class="td-price">2400</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>24</td><td class="td-name">Установка системы эл.обогрева пола с укладкой термоэлементов на монтажную ленту менее 3 кв.м в одном помещении</td><td> м<span class="min-up">2</span></td><td class="td-price">600</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>25</td><td class="td-name">Подключение электрической части системы протечки воды</td><td> шт.</td><td class="td-price">1600</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>26</td><td class="td-name">Подключение электрической части душевой кабины/ванны</td><td> шт.</td><td class="td-price">1100</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr></tbody><tr><th colspan="6" class="th-section">Сантехнические работы</th></tr><tbody class="table-section"><tr><td>1</td><td class="td-name">Установка радиаторов отопления</td><td>шт</td><td class="td-price">1000</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>2</td><td class="td-name">Установка ванны металлической (Акриловой) простой</td><td>шт</td><td class="td-price">2400</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>3</td><td class="td-name">Установка унитаза простого</td><td>шт</td><td class="td-price">1400</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>4</td><td class="td-name">Установка биде</td><td>шт</td><td class="td-price">1800</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>5</td><td class="td-name">Установка лейки гигиенической</td><td>шт</td><td class="td-price">460</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>6</td><td class="td-name">Установка инсталяции</td><td>шт</td><td class="td-price">1800</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>7</td><td class="td-name">Установка раковины простой</td><td>шт</td><td class="td-price">1200</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>8</td><td class="td-name">Установка тюльпана простого</td><td>шт</td><td class="td-price">1700</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>9</td><td class="td-name">Установка Мойдодыра простого</td><td>шт</td><td class="td-price">1700</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>10</td><td class="td-name">Установка душевой кабины простой с сборкой</td><td>шт</td><td class="td-price">3700</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>11</td><td class="td-name">Установка смесителей</td><td>шт</td><td class="td-price">460</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>12</td><td class="td-name">Установка смесителей настенных</td><td>шт</td><td class="td-price">700</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>13</td><td class="td-name">Установка душевой стойки для лейки смесителя</td><td>шт</td><td class="td-price">340</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>14</td><td class="td-name">Установка сантехнических аксессуаров (крючки,мыльницы)</td><td>шт</td><td class="td-price">160</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>15</td><td class="td-name">Установка полотенцесушителя</td><td>шт</td><td class="td-price">1600</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>16</td><td class="td-name">Установка водонагревателя накопительного</td><td>шт</td><td class="td-price">1600</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>17</td><td class="td-name">Установка водонагревателя проточного</td><td>шт</td><td class="td-price">1300</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>18</td><td class="td-name">Штробление гипсовых стен под трубу диаметром до 32мм</td><td>м.п.</td><td class="td-price">240</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>19</td><td class="td-name">Прокладка канализационных труб</td><td>м.п.</td><td class="td-price">120</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>20</td><td class="td-name">Установка ПВХ отводов, тройников для канализации</td><td>шт</td><td class="td-price">300</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>21</td><td class="td-name">Прокладка металлических труб водоснабжения и отопления на сварке</td><td>м.п.</td><td class="td-price">300</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>22</td><td class="td-name">Прокладка труб из сшитого полиэтилена PE-X</td><td>м.п.</td><td class="td-price">240</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>23</td><td class="td-name">Установка фитингов для труб из сшитого полиэтилена PE-X</td><td>шт</td><td class="td-price">240</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>24</td><td class="td-name">Прокладка труб из полипропилена (PP) или полибутена (PB)</td><td>м.п.</td><td class="td-price">240</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>25</td><td class="td-name">Установка фитингов, уголков, тройников для труб из полипроп (PP)</td><td>шт</td><td class="td-price">240</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>26</td><td class="td-name">Установка шарового крана</td><td>шт</td><td class="td-price">300</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>27</td><td class="td-name">Установка фильтров грубой очистки</td><td>шт</td><td class="td-price">300</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>28</td><td class="td-name">Установка фильтров тонкой очистки</td><td>шт</td><td class="td-price">600</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>29</td><td class="td-name">Установка фильтров многоступенчатой системы очистки воды</td><td>шт</td><td class="td-price">1060</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>30</td><td class="td-name">Установка распределительных гребенок</td><td>шт</td><td class="td-price">600</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>31</td><td class="td-name">Установка редукторов давления</td><td>шт</td><td class="td-price">300</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>32</td><td class="td-name">Установка счетчиков водяных</td><td>шт</td><td class="td-price">300</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>33</td><td class="td-name">Установка крана для стиральной машины</td><td>шт</td><td class="td-price">300</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>34</td><td class="td-name">Опресовка системы ХВС, ГВС (стандартный санузел)</td><td>шт</td><td class="td-price">2400</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>35</td><td class="td-name">Установка системы антипротечки(сантехническая часть)</td><td>шт</td><td class="td-price">1600</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>36</td><td class="td-name">Установка встроенных смесителей</td><td>шт</td><td class="td-price">1500</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>37</td><td class="td-name">Установка встроенных кранов</td><td>шт</td><td class="td-price">1200</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>38</td><td class="td-name">Установка сантехнического трапа</td><td>шт</td><td class="td-price">600</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr><tr><td>39</td><td class="td-name">Установка кухонных измельчителей</td><td>шт</td><td class="td-price">1500</td><td class="td-amount"> <input type="text" class="calc-input"></td><td class="td-total"> <span class="local-out"></span></td></tr></tbody><tfoot><tr><th colspan="6" class="th-lastup">Последнее обновление 8.05.2018</th></tr></tfoot></table>');
});