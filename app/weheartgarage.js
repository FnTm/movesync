var weHeartGarage = {
		stageSize : {width:1000, height:1000},
		dancers : 	[
			{class : "tank", id : 1}, {class : "tank", id : 2}, {class : "tank", id : 3}, {class : "tank", id : 4},
			{class : "tank", id : 1}, {class : "tank", id : 2}, {class : "tank", id : 3}, {class : "tank", id : 4}],
		frames : [
			{
				time : 0,
				duration : 2000,
				descriptionId : 0,
				instructionId : 1,

				path : [
					{class:"tank", id: 1, movement : [{X: 900, Y: 450}, {X: 900, Y: 450}], angle:0},
					{class:"tank", id: 2, movement : [{X: 900, Y: 550}, {X: 900, Y: 550}], angle:0},
					{class:"tank", id: 3, movement : [{X: 850, Y: 450}, {X: 850, Y: 450}], angle:0},
					{class:"tank", id: 4, movement : [{X: 850, Y: 550}, {X: 850, Y: 550}], angle:0},
					{class:"tank", id: 1, movement : [{X: 800, Y: 450}, {X: 800, Y: 450}], angle:0},
					{class:"tank", id: 2, movement : [{X: 800, Y: 550}, {X: 800, Y: 550}], angle:0},
					{class:"tank", id: 3, movement : [{X: 750, Y: 450}, {X: 750, Y: 450}], angle:0},
					{class:"tank", id: 4, movement : [{X: 750, Y: 550}, {X: 750, Y: 550}], angle:0}
					]
			},
			{
				time : 2,
				duration : 2000,
								descriptionId : 0,
				instructionId : 1,
				path : [
                    {class:"tank", id: 1, movement : [{X: 900, Y: 450}, {X: 800, Y: 450}], angle:0},
                    {class:"tank", id: 2, movement : [{X: 900, Y: 550}, {X: 800, Y: 550}], angle:0},
                    {class:"tank", id: 3, movement : [{X: 850, Y: 450}, {X: 750, Y: 450}], angle:0},
                    {class:"tank", id: 4, movement : [{X: 850, Y: 550}, {X: 750, Y: 550}], angle:0},
                    {class:"tank", id: 1, movement : [{X: 800, Y: 450}, {X: 700, Y: 450}], angle:0},
                    {class:"tank", id: 2, movement : [{X: 800, Y: 550}, {X: 700, Y: 550}], angle:0},
                    {class:"tank", id: 3, movement : [{X: 750, Y: 450}, {X: 650, Y: 450}], angle:0},
                    {class:"tank", id: 4, movement : [{X: 750, Y: 550}, {X: 650, Y: 550}], angle:0}
                ]
			},
			{
				time : 4,
				duration : 2000,
								descriptionId : 0,
				instructionId : 2,
				path : [
					{class:"tank", id: 3, movement : [ {X: 800, Y: 450}, {X: 700, Y: 325}],angle:45},
					{class:"tank", id: 4, movement : [{X: 800, Y: 550}, {X: 700, Y: 450}], angle:45},
					{class:"tank", id: 1, movement : [{X: 750, Y: 450}, {X: 650, Y: 325}], angle:45},
					{class:"tank", id: 2, movement : [{X: 750, Y: 550}, {X: 650, Y: 450}], angle:45},
					{class:"tank", id: 3, movement : [{X: 700, Y: 450}, {X: 600, Y: 325}], angle:45},
					{class:"tank", id: 4, movement : [{X: 700, Y: 550}, {X: 600, Y: 450}], angle:45},
					{class:"tank", id: 1, movement : [{X: 650, Y: 450}, {X: 550, Y: 325}], angle:45},
					{class:"tank", id: 2, movement : [{X: 650, Y: 550}, {X: 550, Y: 450}], angle:45}
					]
			}
			,
			{
				time : 6,
				duration : 2000,
								descriptionId : 0,
				instructionId : 2,
				path : [
					{class:"tank", id: 3, movement : [ {X: 700, Y: 325}, {X: 700, Y: 325}],angle:0},
					{class:"tank", id: 4, movement : [{X: 700, Y: 450}, {X: 700, Y: 450}], angle:0},
					{class:"tank", id: 1, movement : [{X: 650, Y: 325}, {X: 650, Y: 325}], angle:0},
					{class:"tank", id: 2, movement : [{X: 650, Y: 450}, {X: 650, Y: 450}], angle:0},
					{class:"tank", id: 3, movement : [ {X: 600, Y: 325}, {X: 600, Y: 525}],angle:-90},
					{class:"tank", id: 4, movement : [ {X: 600, Y: 450}, {X: 600, Y: 750}],angle:-90},
					{class:"tank", id: 1, movement :  [{X: 550, Y: 325}, {X: 550, Y: 525}],angle:-90},
					{class:"tank", id: 2, movement :  [{X: 550, Y: 450}, {X: 550, Y: 750}],angle:-90}
					]
			}
			,
			{
				time : 8,
				duration : 5000,
								descriptionId : 0,
				instructionId : 2,
				path : [
					{class:"tank", id: 3, movement : [{X: 700, Y: 325}, 	{X: 150, Y: 325}]	, 	angle:0},
					{class:"tank", id: 4, movement : [{X: 700, Y: 450},	{X: 150, Y: 450}]	,		angle:0},
					{class:"tank", id: 1, movement : [{X: 650, Y: 325},	{X: 100, Y: 325}]	,		angle:0},
					{class:"tank", id: 2, movement : [{X: 650, Y: 450},	{X: 100, Y: 450}]	,		angle:0},
					{class:"tank", id: 3, movement : [ {X: 600, Y: 525}, {X: 50, Y: 525}]	,		angle:0},
					{class:"tank", id: 4, movement : [ {X: 600, Y: 750}, {X: 50, Y: 750}]	,		angle:0},
					{class:"tank", id: 1, movement : [ {X: 550, Y: 525}, {X: 0, Y: 525}]	,		angle:0},
					{class:"tank", id: 2, movement : [ {X: 550, Y: 750}, {X: 0, Y: 750}]	,		angle:0}
					]
			}
            ,
			{
				time : 13,
				duration : 3000,
								descriptionId : 0,
				instructionId : 2,
				path : [
					{class:"tank", id: 3, movement : [{X: 150, Y: 325},	{X: 150, Y: 0}], angle : 90},
					{class:"tank", id: 4, movement : [{X: 150, Y: 450},	{X: 150, Y: 50}],angle : 90},
					{class:"tank", id: 1, movement : [{X: 100, Y: 325},	{X: 100, Y: 0}],angle : 90},
					{class:"tank", id: 2, movement : [{X: 100, Y: 450},	{X: 100, Y: 50}], angle : 90},
					{class:"tank", id: 3, movement :[ {X: 50, Y: 525},	{X: 50, Y:950 }], angle : -90},
					{class:"tank", id: 4, movement :[ {X: 50, Y: 750}, {X: 50, Y:1000 }],angle : -90},
					{class:"tank", id: 1, movement :[ {X: 0, Y: 525}, 	{X: 0, Y: 950}],angle : -90},
					{class:"tank", id: 2, movement :[ {X: 0, Y: 750}, 	{X: 0, Y:1000 }], angle : -90}
					]
			}
		],
		description : 	[
			{
				id : 0,
				name : "Parade",
				instructions : [
					{
						from : 1,
						to : 2,
						text : "Drive forward"
					},
					{
						from : 3,
						to : 4,
						text : "Seperate in 2 groups"
					},
					{
						from : 5,
						to : 16,
						text : "Move forward"
					}
				]
			}
		]
	}