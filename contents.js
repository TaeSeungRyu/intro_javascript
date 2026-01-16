Date.prototype.yyyymm = function () {
  var mm = this.getMonth() + 1;
  return [this.getFullYear(), (mm > 9 ? "" : "0") + mm].join("-");
};

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    $("#imBody").fadeIn();
  }, 250);
});

let stars = [
  '<i class="fas fa-star" style="color : #d7d770"></i>',
  '<i class="fas fa-star-half-alt" style="color : #999945"></i>',
  '<i class="far fa-star" style="color : gray"></i>',
];

let statckDesc = [
  `
     <div>자바는 13버전까지 사용해 보았습니다. 람다와 함수형, stream을 사용할 수 있습니다.</div>
     <div>스프링, 스프링부트, 전자정부, 스트럿츠 및 웹플럭스 프레임워크를 사용할 수 있습니다.</div>
     <div>Mybatis 및 JPA 방식의 데이터베이스 프레임워크를 사용할 수 있습니다.</div> 
    `,
  `
     <div>ECMA에 대해서 개념을 가지고 작업할 수 있습니다. </div>
     <div>여러 GIS와 관련된 작업을 할 수 있습니다.(오픈레이어스, 카카오톡맵 등)</div>
    `,
  `
     <div>앵귤러 버전 2.0 이상부터 다룰 수 있습니다.</div>
     <div>파이어베이스와 연동을 할 수 있습니다.</div>
     <div>RXJS를 활용하여 구독관계를 통한 데이터 공유를 할 수 있습니다.</div>
    `,
  `
     <div>파셀(또는 웹팩)환경을 구축하여 개발을 할 수 있습니다. </div>
     <div>프록시 설정을 통해 REST-API형식으로 개발을 할 수 있습니다.</div>
    `,
  `
     <div>익스프레스(express), Nestjs 환경을 구축하여 서버를 구성할 수 있습니다.</div>
     <div>일렉트론(electron) 환경을 구축하여 어플리케이션을 개발할 수 있습니다.</div>
    `,
  `
     <div>모델 1방식의 간단한 웹사이트 개발을 할 수 있습니다.</div>
    `,
  `
     <div>플라스크를 활용하여 간단한 서버를 만들 수 있습니다.</div>
     <div>인공지능에 대한 개념을 익히기 위해 사이킷런, 텐서플로에 대해서 낮은 수준의 작업을 해 보았습니다.</div>
    `,
  `
     <div>관계형 데이터베이스에 대해서 CRUD 기능을 사용할 수 있습니다.</div>
     <div>몽고db, redis에 대해서 사용할 수 있습니다.</div>
     <div>asterixdb 및 influxdb도 익숙하지는 않지만, 사용할 수 있습니다.</div>
    `,
  `
     <div>안드로이드 앱 개발은 하이브리드 형식으로 개발을 하고 마켓에 배포한 경험이 있습니다.</div>
     <div>아이폰 앱 개발은 하이브리드 형식으로 간단한 유지보수 정도만 해본 경험이 있습니다. </div>
     <div>리엑트네이티브를 시간 날 때 조금씩 연습해 보고 있습니다. </div>
    `,
  `
     <div>형상 관리는 git, github, svn을 사용하였습니다.</div>
     <div>운영체제는 리눅스, 윈도우 계열을 주로 사용하였으며 aws, 맥에 대한 경험은 다소 적습니다.</div>
     <div>자동 배포 및 빌드 도구로는 젠킨스, git action을 사용해 보았습니다.</div>
    `,
  `
     <div>리엑트는 앵귤러를 접하고 난 뒤 21년도부터 다루어 보았습니다.</div>
     <div>클래스형태, 함수형 형태를 모두 경험하여 보았습니다.</div>
     <div>tanstack(라우터, query), next-auth, nextjs를 사용 할 수 있습니다.</div>
    `,
  `
     <div>23년도부터 Vuejs를 활용하여 화면 개발을 하였습니다.</div>
     <div>컴포지션 형태의 구조를 사용 할 수 있습니다.</div>
     <div>nuxtjs를 사용 할 수 있습니다.</div>
    `,
];

let stackArray = [
  {
    img: "./java.PNG",
    name: "Java",
    level: stars[0] + stars[0] + stars[0] + stars[0] + stars[1],
    desc: statckDesc[0],
  },
  {
    img: "./javascript.PNG",
    name: "Javascript",
    level: stars[0] + stars[0] + stars[0] + stars[0] + stars[2],
    desc: statckDesc[1],
  },
  {
    img: "./angular.PNG",
    name: "Angular",
    level: stars[0] + stars[0] + stars[0] + stars[0] + stars[2],
    desc: statckDesc[2],
  },
  {
    img: "./react.PNG",
    name: "React",
    level: stars[0] + stars[0] + stars[0] + stars[0] + stars[2],
    desc: statckDesc[10],
  },
  {
    img: "./Vue.png",
    name: "Vue",
    level: stars[0] + stars[0] + stars[0] + stars[0] + stars[1],
    desc: statckDesc[11],
  },
  {
    img: "./typescript.PNG",
    name: "Typescript",
    level: stars[0] + stars[0] + stars[0] + stars[0] + stars[2],
    desc: statckDesc[3],
  },
  {
    img: "./node.PNG",
    name: "Node.js",
    level: stars[0] + stars[0] + stars[0] + stars[1] + stars[2],
    desc: statckDesc[4],
  },
  {
    img: "./php.PNG",
    name: "php",
    level: stars[0] + stars[0] + stars[1] + stars[2] + stars[2],
    desc: statckDesc[5],
  },
  {
    img: "./python.PNG",
    name: "Python",
    level: stars[0] + stars[0] + stars[2] + stars[2] + stars[2],
    desc: statckDesc[6],
  },
  {
    img: "./db.PNG",
    name: "Database",
    level: stars[0] + stars[0] + stars[0] + stars[1] + stars[2],
    desc: statckDesc[7],
  },
  {
    img: "./mobile.jpg",
    name: "Mobile",
    level: stars[0] + stars[0] + stars[2] + stars[2] + stars[2],
    desc: statckDesc[8],
  },
  {
    img: "./etc.PNG",
    name: "Etc",
    level: stars[0] + stars[0] + stars[0] + stars[2] + stars[2],
    desc: statckDesc[9],
  },
];

stackArray.forEach((data, idx) => {
  let tr = $("<tr>").addClass("vr-md");
  tr.append(
    $("<td>").text(idx + 1),
    $("<td>").append($("<img>").attr({ src: data.img, class: "img-rounder" })),
    $("<td>").text(data.name),
    $("<td>").append(data.desc),
    $("<td>").append(data.level)
  );
  $("#stack").append(tr);
});

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

let iconPath =
  "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z";

let chart = am4core.create("chartdiv", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

chart.data = [
  {
    name: "노력",
    value: 500,
    color: "white",
  },
  {
    name: "경청",
    value: 250,
    color: "white",
  },
  {
    name: "집중",
    value: 200,
    color: "white",
  },
  {
    name: "대화",
    value: 150,
    color: "white",
  },
  {
    name: "질문",
    value: 150,
    color: "white",
  },
  {
    name: "고집",
    value: 45,
    color: "white",
  },
];

let series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labels.template.adapter.add("fill", function (fill, target) {
  return target.dataItem.dataContext["color"];
});

series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0.5;
series.labelsContainer.width = 200;
series.ticks.template.adapter.add("stroke", function (fill, target) {
  return target.dataItem.dataContext["color"];
});

series.legendSettings.labelText =
  "{name}: {value.percent.formatNumber('#.0')}%";

chart.legend = new am4charts.Legend();
chart.legend.position = "left";
chart.legend.valign = "bottom";
chart.legend.valueLabels.template.disabled = true;
chart.legend.labels.template.adapter.add("fill", function (fill, target) {
  return "white";
});

let favorites = [
  [
    { name: "Java", value: 150, color: "#6bde76" },
    { name: "Javascript", value: 150, color: "green" },
    { name: "php", value: 20, color: "#f5ae9d" },
    { name: "Python", value: 40, color: "#aee8be" },
    { name: "C#", value: 10, color: "#526ca7" },
    { name: "C, C++", value: 1, color: "#d5cc5f" },
  ],
  [
    { name: "Jquery", value: 30, color: "#f5ae9d" },
    { name: "Angular", value: 55, color: "#aee8be" },
    { name: "React", value: 35, color: "#526ca7" },
    { name: "Vue.js", value: 65, color: "#d5cc5f" },
  ],
  [
    { name: "MongoDb", value: 150, color: "#6bde76" },
    { name: "Oracle", value: 80, color: "#f5ae9d" },
    { name: "My-sql", value: 80, color: "#aee8be" },
    { name: "Ms-sql", value: 30, color: "#526ca7" },
    { name: "Redis", value: 45, color: "#d5cc5f" },
  ],
];

let summeryNames = ["summeryOne", "summeryTwo", "summeryThree"];
favorites.forEach((element, idx) => {
  let innerChart = am4core.create(summeryNames[idx], am4charts.PieChart);
  innerChart.data = element;
  innerChart.innerRadius = am4core.percent(30);
  innerChart.radius = am4core.percent(70);
  // Add and configure Series
  let pieSeries = innerChart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "value";
  pieSeries.dataFields.category = "name";
  pieSeries.slices.template.stroke = am4core.color("white");
  pieSeries.slices.template.strokeOpacity = 0.2;
  // This creates initial animation
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
  pieSeries.labels.template.text = "{name}";
  pieSeries.slices.template.propertyFields.fill = "color";

  pieSeries.labels.template.adapter.add("fill", function (fill, target) {
    return "white";
  });
  innerChart.hiddenState.properties.radius = am4core.percent(0);
});

//timeLine ----------------------------

let chartHistory = am4core.create(
  "timeLine",
  am4plugins_timeline.SerpentineChart
);
chartHistory.curveContainer.padding(50, 20, 50, 20);
chartHistory.levelCount = 4;
chartHistory.yAxisRadius = am4core.percent(25);
chartHistory.yAxisInnerRadius = am4core.percent(-25);
chartHistory.maskBullets = false;

let colorSet = new am4core.ColorSet();
colorSet.saturation = 0.5;

chartHistory.data = [
  {
    category: "군인",
    start: "2007-03",
    end: "2014-07",
    color: colorSet.getIndex(13),
    task: "대한민국 육군에서 장교로 근무",
  },
  {
    category: "준비",
    start: "2014-07",
    end: "2014-11",
    color: colorSet.getIndex(1),
    task: "전역 후 진로 고민",
  },
  {
    category: "공부",
    start: "2014-11",
    end: "2015-04",
    color: colorSet.getIndex(7),
    task: "한국 디지털 기업협회에서 프로그래밍 공부",
  },
  {
    category: "준비",
    start: "2015-04",
    end: "2015-05",
    color: colorSet.getIndex(1),
    task: "구직활동",
  },
  {
    category: "근무",
    start: "2015-05",
    end: "2017-11",
    color: colorSet.getIndex(3),
    task: "엘토브에서 근무(~대리)",
  },
  {
    category: "준비",
    start: "2017-11",
    end: "2017-12",
    color: colorSet.getIndex(1),
    task: "구직활동",
  },
  {
    category: "근무",
    start: "2017-12",
    end: "2018-09",
    color: colorSet.getIndex(9),
    task: "티젠소프트에서 근무(~과장)",
  },
  {
    category: "준비",
    start: "2018-09",
    end: "2018-10",
    color: colorSet.getIndex(1),
    task: "구직활동",
  },
  {
    category: "공부",
    start: "2019-01",
    end: "2020-12",
    color: colorSet.getIndex(15),
    task: "학점은행제(컴공)",
  },
  {
    category: "근무",
    start: "2018-10",
    end: "2022-03",
    color: colorSet.getIndex(2),
    task: "상록아이엔씨 근무(~선임개발자)",
  },
  {
    category: "준비",
    start: "2022-03",
    end: "2022-07",
    color: colorSet.getIndex(14),
    task: "개인공부/육아(코로나)",
  },
  {
    category: "근무",
    start: "2022-07",
    end: "2023-04",
    color: colorSet.getIndex(23),
    task: "아이에스테크놀로지 근무(~개발차장)",
  },
  {
    category: "근무",
    start: "2023-04",
    end: new Date().yyyymm() + "",
    color: colorSet.getIndex(13),
    task: "비유바움 근무(~핀테크팀 차장)",
  },
];

chartHistory.dateFormatter.dateFormat = "yyyy-MM";
chartHistory.dateFormatter.inputDateFormat = "yyyy-MM";
chartHistory.fontSize = 11;

let categoryAxis = chartHistory.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.labels.template.paddingRight = 25;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.renderer.innerRadius = -60;
categoryAxis.renderer.radius = 60;
categoryAxis.renderer.line.strokeColor = "white"; //그리드 색
categoryAxis.renderer.grid.template.stroke = "white";
categoryAxis.renderer.labels.template.fill = "white";

let dateAxis = chartHistory.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 70;
dateAxis.baseInterval = { count: 1, timeUnit: "month" };
dateAxis.renderer.tooltipLocation = 0;
dateAxis.startLocation = -0.5;
dateAxis.renderer.line.strokeDasharray = "3,4";
dateAxis.renderer.line.stroke = "white";
dateAxis.renderer.line.strokeOpacity = 1;
dateAxis.tooltip.background.fillOpacity = 1;
dateAxis.tooltip.background.cornerRadius = 5;
dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
  "alternativeBackground"
);
dateAxis.tooltip.label.paddingTop = 7;
dateAxis.renderer.grid.template.stroke = "white"; //월단위 가운데 선색

let labelTemplate = dateAxis.renderer.labels.template;
labelTemplate.verticalCenter = "middle";
labelTemplate.fillOpacity = 0.9;
labelTemplate.background.fill = "black"; //요놈이 노멤버 악토버 리셈버 배경 색
labelTemplate.background.fillOpacity = 1;
labelTemplate.fill = "white"; //가운데 노멤버 글씨 색
labelTemplate.padding(7, 7, 7, 7);

let seriesHistory = chartHistory.series.push(
  new am4plugins_timeline.CurveColumnSeries()
);
seriesHistory.columns.template.height = am4core.percent(75);
seriesHistory.columns.template.tooltipText =
  "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

//메인선 관리
seriesHistory.dataFields.openDateX = "start";
seriesHistory.dataFields.dateX = "end";
seriesHistory.dataFields.categoryY = "category";

seriesHistory.columns.template.propertyFields.fill = "color"; // get color from data
seriesHistory.columns.template.propertyFields.stroke = "color";
seriesHistory.columns.template.strokeOpacity = 0;
