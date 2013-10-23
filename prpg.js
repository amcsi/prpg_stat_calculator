var C = console;

Ext.onReady(function() {

/**
Strength, Endurance, Agility, Stamina, SP, Accuracy, 
INT, Matk, Mdef, Instinct, MP, Energy
**/
	var skillJobObj = {
		"Swordsman":              [3,2,2,3,1, 1, 0,-2,-3,-1,-1] // 1 ++ ++ 1 + + 0 -- -1 - -
		,"Handfighter":           [3,3,1,2,2, -1, -3,-1,1,0,-2] // 1 1 + ++ ++ - -1 - + 0 --
		,"Spearman":              [2,1,3,2,1, 3, -1,-2,-3,0,-1] // ++ + 1 ++ + 1 - -- -1 0 -
		,"Warrior":               [2,1,2,3,3, 1, -1,0,-1,-3,-2] // ++ + ++ 1 1 + - 0 - -1 --
		,"Thief":                 [-1,0,3,1,2, 3,1,-2,-3,2,-1] // - 0 1 + ++ 1 + -- -1 ++ -
		,"Archer":                [-2,-1,3,2,1, 3, -1,1,-3,2,0] // -- - 1 ++ + 1 - + -1 ++ 0
		,"Chaos Legionaire":      [2,-1,3,0,3, 2, 1,-3,-1,1,-2] // ++ - 1 0 1 ++ + -1 - + --
	};
	var mageJobObj = {	
		"Dark Mage":              [-2,-3,-1,0,-1, 1, 3,2,2,1,3] // -- -1 - 0 - + 1 ++ ++ + 1 
		,"White Mage":            [-3,2,-1,1,-2, -1, 3,0,3,2,1] // -1 ++ - + -- - 1 0 1 ++ +
		,"Earth Mage":            [1,3,-3,-2,-1, -1, 2,0,3,1,2] // + 1 -1 -- - - ++ 0 1 + ++
		,"Wind Mage":             [-2,-3,2,-1,-1, 3, 1,3,0,2,1] // -- -1 ++ - - 1 + 1 0 ++ +
		,"Fire Mage":             [2,-1,2,-1,-3, -2, 1,3,0,1,3] // ++ - ++ - -1 -- + 1 0 + 1
		,"Water Mage":            [-2,1,0,-1,-3, -1, 3,2,2,1,3] // -- + 0 - -1 - 1 ++ ++ + 1
		,"Psychic Mage":          [-2,-1,1,-3,-1, 0, 3,2,2,3,1] // -- - + -1 - 0 1 ++ ++ 1 +
	};
	var classObj = {	
		"Shadow Demon":           [2,-1,3,2,0, -1, 1,3,0,-1,0] // ++ - 1 ++ 0 - + 1 0 - 0
		,"Blaze Demon":           [3,-1,2,0,1, -1, 0,3,-1,0,2] // 1 - ++ 0 + - 0 1 - 0 ++
		,"Rock Demon":            [1,3,-1,0,2, -1, 0,0,3,-1,2] // + 1 - 0 ++ - 0 0 1 - ++
		,"Wolf Demon":            [2,3,1,3,0, 0, -1,-1,0,2,-1] // ++ 1 + 1 0 0 - - 0 ++ -
		,"Tiger Demon":           [3,3,2,2,0, 0, -1,0,-1,1,-1] // 1 1 ++ ++ 0 0 - 0 - + -
		,"Bear Demon":            [3,3,-1,2,2, 0, -1,0,0,1,-1] // 1 1 - ++ ++ 0 - 0 0 + -
		,"Onimusha":              [2,-1,3,-1,1, 3, 2,0,-1,0,0] // ++ - 1 - + 1 ++ 0 - 0 0
		,"Human":                 [2,-1,0,-1,2, 0, 3,1,0,-1,3] // ++ - 0 - ++ 0 1 + 0 - 1
		,"Featherfolk":           [0,-1,1,2,-1, 2, 0,3,3,-1,0] // 0 - + ++ - ++ 0 1 1 - 0
		,"Dark Elf":              [1,-1,2,0,-1, 2, 3,3,-1,0,0] // + - ++ 0 - ++ 1 1 - 0 0
		,"Elf":                   [0,-1,2,-1,-1, 2, 3,0,3,0,1] // 0 - ++ - - ++ 1 0 1 0 +
		,"Dwarf":                 [3,3,-1,2,2, -1, 1,0,0,-1,0] // 1 1 - ++ ++ - + 0 0 - 0
		,"Centaur":               [3,1,3,2,0, 2, 0,0,-1,-1,-1] // 1 + 1 ++ 0 ++ 0 0 - - -
		,"Uruk Ork":              [3,3,0,1,2, 2, -1,-1,-1,0,0] // 1 1 0 + ++ ++ - - - 0 0
		,"Grimalkin":             [2,1,3,-1,0, 0, -1,2,-1,3,0] // ++ + 1 - 0 0 - ++ - 1 0
		,"Protoss":             	[0,0,2,0,-3, -1, 3,2,1,3,-3, 6] // ++ + 1 - 0 0 - ++ - 1 0
	};
	classObj["Protoss"].hasEnergy = true;
	var isSkill = function (name) {
		if (skillJobObj[name]) {
			return true;
		}
		if (mageJobObj[name]) {
			return false;
		}
		else {
			return null;
		}
	};
	var jobObj = {};
	var i, j;
	for (i in jobObj) { 
		var count = 0; 
		for (j = 0; j < jobObj[i].length; j++) { 
			count += jobObj[i][j]; 
		} 
		console.info(count)
	}
	var obj = classObj;
	var count = 0;
	var capabilities = {
		jobs: jobObj,
		classes: classObj
	};
	window.debugStatCount = function (type) {
		var obj = capabilities(jobs[type]);
		for (i in obj) { 
			count = 0; 
			for (j = 0; j < obj[i].length; j++) { 
				count += obj[i][j]; 
			} 
			console.info(i+":",count) 
		}
	} 
	window.jobObj = jobObj;
	Ext.apply(jobObj, skillJobObj);
	Ext.apply(jobObj, mageJobObj);
	window.classObj = classObj;
	var arrayize = function (obj) {
		var i;
		var arr;
		var ret = [];
		for (i in obj) {
			arr = Ext.clean(obj[i]);
			arr.unshift(i);
			ret.push(arr);
		}
		return ret;
	};
	var jobArr = arrayize(jobObj);
	var classArr = arrayize(classObj);
	var rankCollection = new Ext.util.MixedCollection;
	rankCollection.add('F', {value: 0});
	rankCollection.add('F+', {value: 20});
	rankCollection.add('F++', {value: 50});
	rankCollection.add('E', {value: 100});
	rankCollection.add('E+', {value: 120});
	rankCollection.add('E++', {value: 150});
	rankCollection.add('D', {value: 200});
	rankCollection.add('D+', {value: 220});
	rankCollection.add('D++', {value: 250});
	rankCollection.add('C', {value: 300});
	rankCollection.add('C+', {value: 320});
	rankCollection.add('C++', {value: 350});
	rankCollection.add('B', {value: 400});
	rankCollection.add('B+', {value: 420});
	rankCollection.add('B++', {value: 450});
	rankCollection.add('A', {value: 500});
	rankCollection.add('A+', {value: 520});
	rankCollection.add('A++', {value: 550});
	rankCollection.add('S', {value: 600});
	rankCollection.add('S+', {value: 620});
	rankCollection.add('S++', {value: 650});
	rankCollection.add('SS', {value: 700});
	rankCollection.add('SS+', {value: 720});
	rankCollection.add('SS++', {value: 750});
	rankCollection.add('SSS', {value: 800});
	rankCollection.add('SSS+', {value: 820});
	rankCollection.add('SSS++', {value: 850});
	rankCollection.add('U', {value: 1000});
	var levelBonuses = [
		[55, 200],
		[75, 350],
		[100, 1000],
		[150, 1350],
		[200, 2000]
	];

    var StatTypes = {
        ENERGY: 11
    };
		
	function getBonusPoints(level) {
		var bonus;
		var bonusNumber = 0;
		var i;
		for (i = 0; i < levelBonuses.length; i++) {
			bonus = levelBonuses[i];
			if (level >= bonus[0]) {
				bonusNumber = bonus[1];
			}
			else {
				return bonusNumber;			
			}
		}
		return bonusNumber;
	}
    /**
     * Power level = rankValue + level*10 + jobChangeBonus
     * 
     * @param rankObj $rankObj 
     * @param level $level 
     * @access public
     * @return int
     */
	function getPowerLevel(rankObj, level) {
		var valWithoutBonus = rankObj.value + level * 10;
		return valWithoutBonus + getBonusPoints(level);
	}
	var ranks = rankCollection.keys.slice();
	
	var statNames = ["Strength", "Endurance", "Agility", "Stamina", "SP", "Accuracy", "INT",
	"Matk", "Mdef", "Instinct", "MP", "Energy"];
	var baseStatValue = 9;
	var StatsCollection = Ext.extend(Ext.util.MixedCollection, {
		statNames: statNames,
		baseStatValue: 9,
		constructor: function () {
			StatsCollection.superclass.constructor.apply(this, arguments);
			var i;
			var statNames = this.statNames;
			var baseStatValue = this.baseStatValue;
			for (i = 0; i < statNames.length; i++) {
				this.add(statNames[i], baseStatValue);
			}
		},
		addValues: function (arr, isDual) {
			var i;
			var count = this.getCount();
			var amount;
			for (i = 0; i < count; i++) {
				amount = arr[i];
				if (isDual && 0 > amount) {
					amount = (amount > -3) ? 0 : -1;
				}
				this.items[i] += amount;
			}
		}
	});
	var reader = new Ext.data.ArrayReader({
		idIndex: 0,
		fields: (function() {
			var ret = Ext.clean(statNames);
			ret.unshift('name');
			return ret;
		}())
	});

	var statPage = {
		xtype: "panel",
		getLevel: function () {
			if (!this.level) {
				this.level = this.getComponent('level').getComponent('level').getValue()
			}
			return this.level;
		},
		setLevel: function (level) {
			this.level = level;
			var results = this.getComponent('results');
			results.onLevelChange(level);
		},
		calculateResults: function() {
			var stats = this.getComponent('jobsAndClass').getStats();
			return this.getComponent('results').takeStats(stats);
		},
		closable: true,
		statPageAutoNumber: 0,
		listeners: {
			added: function (comp, cont, index) {
				var title = "Stat page " + (++statPage.statPageAutoNumber);
				comp.initialTitle = title;
				comp.title = title;
				comp.setTitle(title);
			}
		},
		items: [
			{
				xtype: "container",
				layout: "hbox",
				layoutConfig: {
					align: "middle",
					padding: "0 5",
					defaultMargins: "0 10 0 0"
				},
				items: [
					{
						xtype: "box",
						html: "Tab címe:"
					},
					{
						xtype: "textfield",
						enableKeyEvents: true,
						listeners: {
							keydown: {
								fn: function (tf) {
									var subTab = tf.ownerCt.ownerCt;
									var val = tf.getValue() || subTab.initialTitle;
									subTab.setTitle(val);
								},
								delay: 1
							}
						}
					}
				]
			},
			{
				xtype: "container",
				height: 30,
				itemId: "jobsAndClass",
				layout: "hbox",
				layoutConfig: {
					align: "middle",
					padding: "0 5",
					defaultMargins: "0 10 0 0"
				},
				defaultType: "combo",
				defaults: {
					mode: "local",
					triggerAction: 'all',
					valueField: 'name',
					displayField: 'name',
					lazyRender: true
				},
				getStats: function () {
					var comps = ['job1', 'job2', 'class'];
					var i;
					var stats = new StatsCollection();
					var vals = [];
					for (i = 0; i < comps.length; i++) {
						val = this.getComponent(comps[i]).getValue();
						vals.push(val);
					}
					var addStats;
					var isDual = !(vals[0] && vals[1] && isSkill(vals[0]) === isSkill(vals[1]));
					var hasJob1 = false;
					var isJob1Skill;
					val = vals[0];
					var classArray = classObj[vals[2]] || [];
					if (val) {
						stats.addValues(jobObj[val], isDual);
					}
					val = vals[1];
					if (val) {
						stats.addValues(jobObj[val], isDual);
					}
					if (vals[2]) {
						stats.addValues(classObj[vals[2]], false);
					}
					if (classArray.hasEnergy) {
						stats.items[11] = 9 + 6;
					}
					else {
						stats.items[11] = 0;
					}
					return stats;
				},
				onSelect: function() {
					this.ownerCt.calculateResults();
				},
				items: [
					{
						xtype: "box",
						html: "Karakter jobok és faj:"
					},
					{
						xtype: "combo",
						itemId: "job1",
						plugins: [
							{
								init: function (comp) {
									comp.bindStore({
										reader: reader,
										data: jobArr
									});
								}
							}
						],
						listeners: {
							select: function (combo, rec, index) {
								var job2 = this.ownerCt.getComponent('job2');
								var val2 = job2.getValue();
								if (!val2) {
									job2.setValue(combo.getValue());
								}
								combo.ownerCt.onSelect();
							}
						},
						emptyText: "Job 1"
					},
					{
						xtype: "combo",
						itemId: "job2",
						plugins: [
							{
								init: function (comp) {
									comp.bindStore({
										reader: reader,
										data: jobArr
									});
								}
							}
						],
						listeners: {
							select: function (combo, rec, index) {
								combo.ownerCt.onSelect();
							}
						},
						emptyText: "Job 2"
					},
					{
						xtype: "combo",
						itemId: "class",
						plugins: [
							{
								init: function (comp) {
									comp.bindStore({
										reader: reader,
										data: classArr
									});
								}
							}
						],
						listeners: {
							select: function (combo, rec, index) {
								combo.ownerCt.onSelect();
							}
						},
						emptyText: "Faj"
					}
				]
			},
			/**
			 * Szint mező
			 * 
			 **/			 			 			
			{
				xtype: "container",
				height: 30,
				itemId: "level",
				layout: "hbox",
				layoutConfig: {
					align: "middle",
					padding: "0 5",
					defaultMargins: "0 10 0 0"
				},
				items: [
					{
						xtype: "box",
						html: "Szint:"
					},
					{
						xtype: "numberfield",
						minValue: 1,
						maxValue: 200,
						value: 1,
						enableKeyEvents: true,
						itemId: "level",
						plugins: [
							{
								init: function (comp) {
									var onChange = function () {
										var statPageComp = this.ownerCt.ownerCt;
										statPageComp.setLevel(comp.getValue());
									};
									comp.on('change', onChange);
									comp.on('keyup', onChange);
								}
							}
						]
					}
				]
			},
			/**
			 * Eredmények
			 * 
			 **/			 			 			
			{
				xtype: "container",
				layout: "hbox",
				itemId: "results",
				layoutConfig: {
					align: "middle",
					padding: "0 5",
					defaultMargins: "0 10 0 0"
				},
				takeStats: function (stats) {
					var table = this.getComponent('table');
					var count = stats.getCount();
					var i;
					var c;
					var level = this.ownerCt.getLevel();
					var rankNumber;
					var rankString;
					for (i = 0; i < count; i++) {
						c = table.getRankComp(i);
						rankNumber = stats.items[i];
						rankString = ranks[rankNumber];
						c.setValue(rankString);
						var powerLevelComp = table.getPowerLevelComp(i);
						powerLevelComp.changePowerLevel(level, rankString);
					}
				},
				onLevelChange: function (level) {
					var table = this.getComponent('table');
					var count = table.getRowCount();
					var i;
					var c;
					var rankNumber;
					var rankString;
					for (i = 0; i < count; i++) {
						var powerLevelComp = table.getPowerLevelComp(i);
						powerLevelComp.changePowerLevel(level);
					}
				},
				calculateTotal: function () {
					var total = 0;
										
				},
				items: [
					{
						xtype: "box",
						html: "Eredmény:"
					},
					{
						xtype: "container",
						itemId: "table",
						getRowCount: function () {
							return Math.ceil(this.items.getCount() / this.layoutConfig.columns);
						},
						getRankComp: function (index) {
							return this.getComponent(index * this.layoutConfig.columns + 1);
						},
						getPowerLevelComp: function (index) {
							return this.getComponent(index * this.layoutConfig.columns + 2);
						},
						layout: "table",
						layoutConfig: {
							columns: 3
						},
						calculateTotal: function () {
							var i;
							var count = this.getRowCount();
							var total = 0;
							for (i = 0; i < count; i++) {
								total += parseInt(this.getPowerLevelComp(i).getValue(), 10);
							}
                            // the totalFair value is the total of all stats anyone can have
                            var energyPowerObj = this.getPowerLevelComp(StatTypes.ENERGY);
                            var totalFair = total - parseInt(energyPowerObj.getValue(), 10);
							this.ownerCt.getComponent('total').update({
                                powerLevel: total,
                                powerLevelFair: totalFair
							});
						},
						items: (function () {
							var ret = [];
							var config;
							var statName;
							var statValue;
							var i, j;
							var isEnergy = false;
							var basePowerLevel = rankCollection.items[baseStatValue].value;
							var powerLevel;
							var changePowerLevel = function (level, rankString) {
								if (rankString) {
									this.rankString = rankString;
								}
								rankString = this.rankString;
								var rankObj = rankCollection.get(rankString);
								var val = rankObj ? getPowerLevel(rankObj, level) : 'N/A';
								this.setValue(val);
								this.ownerCt.calculateTotal();
							}
							/**
							 * When a rank result is changed
							 **/	
														 						 							
							var onChange = function () {
								var rankString = this.getValue();
								rankString = rankString.toUpperCase();
								var statTypeIndex = this.statTypeIndex;
								var table = this.ownerCt;
								var level = table.ownerCt.ownerCt.getLevel();
								table.getPowerLevelComp(statTypeIndex).changePowerLevel(level, rankString);
							}
							for (i = 0; i < statNames.length; i++) {
								statName = statNames[i];
								isEnergy = false;
								statValue = baseStatValue;
								powerLevel = basePowerLevel;
								if (StatTypes.ENERGY == i) {
									isEnergy = true;
									statValue = 0;
									powerLevel = rankCollection.items[statValue].value;
								}
								statValue = 11 == i ? 0 : baseStatValue; 
								config = {
									xtype: "box",
									html: statName+":"
								};
								ret.push(config);
								var 
								config = {
									xtype: "textfield",
									statTypeIndex: i,
									width: 40,
									enableKeyEvents: true,
									listeners: {
										change: onChange,
										keyup: onChange
									},
									value: ranks[statValue],
									enableKeyEvents: true
								};
								ret.push(config);
								config = {
									xtype: "textfield",
									width: 50,
									rankString: ranks[statValue],
									value: powerLevel,
									changePowerLevel: changePowerLevel,
									enableKeyEvents: true
								};
								ret.push(config);
							}
							return ret;
						}())
					},
					{
						itemId: "total",
						xtype: "box",
						data: {
							powerLevelFair: 10 * 20,
							powerLevel: 11 * 20
						},
						tpl: [
                            '<p>Totál power level:<br>' +
                            'Természetesen: <strong>{powerLevelFair}</strong><br>' +
							'Energyvel: <strong>{powerLevel}</strong></p>'
						]
					}
				]
			}
		]
	};

	var viewport = new Ext.Viewport({
		id: "viewport",
		layout: "anchor",
		items: [
			{
				anchor: "100% 100%",
				xtype: "tabpanel",
				forceLayout: true,
				newTab: function () {
					var newComp = this.add(statPage);
					this.setActiveTab(newComp);
				},
				plugins: [
					new Ext.ux.TabCloseMenu()
				],
				listeners: {
					render: function (tp) {
						tp.newTab();
					}
				},
				defaults: {
					closable: "true"
				},
				tbar: [
					{
						text: "New tab",
						ref: "../newTabButton",
						handler: function (b, evt) {
							var tp = b.ownerCt.ownerCt;
							tp.newTab();
						}
					}
				]
			}
		]
	});
});
