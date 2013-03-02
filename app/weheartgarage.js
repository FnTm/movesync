var danceVar = {
		stageSize : {width:1000, height:1000},
		dancers : 	[
			{class : "tank", id : 1}, {class : "tank", id : 2}, {class : "tank", id : 3}, {class : "tank", id : 4},
			{class : "tank", id : 1}, {class : "tank", id : 2}, {class : "tank", id : 3}, {class : "tank", id : 4}],
		frames : [
			{
				time : 0,
				duration : 2000,
				descriptionId : 0,
				path : [
					{class:"tank", id: 1, movement : [{X: 900, Y: 450}, {X: 900, Y: 450}], rotation : 66.75},
					{class:"tank", id: 2, movement : [{X: 900, Y: 550}, {X: 900, Y: 550}], rotation : 156.75},
					{class:"tank", id: 3, movement : [{X: 850, Y: 450}, {X: 850, Y: 450}], rotation : 246.75},
					{class:"tank", id: 4, movement : [{X: 850, Y: 550}, {X: 850, Y: 550}], rotation : 336.75},
					{class:"tank", id: 1, movement : [{X: 800, Y: 450}, {X: 800, Y: 450}], rotation : 22.25},
					{class:"tank", id: 2, movement : [{X: 800, Y: 550}, {X: 800, Y: 550}], rotation : 112.25},
					{class:"tank", id: 3, movement : [{X: 750, Y: 450}, {X: 750, Y: 450}], rotation : 202.25},
					{class:"tank", id: 4, movement : [{X: 750, Y: 550}, {X: 750, Y: 550}], rotation : 292.25}
					]
			},
			{
				time : 2,
				duration : 2000,
				descriptionId : 1,
				path : [
                    {class:"tank", id: 1, movement : [{X: 900, Y: 450}, {X: 800, Y: 450}], rotation : 66.75},
                    {class:"tank", id: 2, movement : [{X: 900, Y: 550}, {X: 800, Y: 550}], rotation : 156.75},
                    {class:"tank", id: 3, movement : [{X: 850, Y: 450}, {X: 750, Y: 450}], rotation : 246.75},
                    {class:"tank", id: 4, movement : [{X: 850, Y: 550}, {X: 750, Y: 550}], rotation : 336.75},
                    {class:"tank", id: 1, movement : [{X: 800, Y: 450}, {X: 700, Y: 450}], rotation : 22.25},
                    {class:"tank", id: 2, movement : [{X: 800, Y: 550}, {X: 700, Y: 550}], rotation : 112.25},
                    {class:"tank", id: 3, movement : [{X: 750, Y: 450}, {X: 650, Y: 450}], rotation : 202.25},
                    {class:"tank", id: 4, movement : [{X: 750, Y: 550}, {X: 650, Y: 550}], rotation : 292.25}
                ]
			},
			{
				time : 4,
				duration : 2000,
				descriptionId : 0,
				path : [
					{class:"tank", id: 3, movement : [ {X: 800, Y: 450}, {X: 700, Y: 325}], rotation : 66.75},
					{class:"tank", id: 4, movement : [{X: 800, Y: 550}, {X: 700, Y: 450}], rotation : 156.75},
					{class:"tank", id: 1, movement : [{X: 750, Y: 450}, {X: 650, Y: 325}], rotation : 246.75},
					{class:"tank", id: 2, movement : [{X: 750, Y: 550}, {X: 650, Y: 450}], rotation : 336.75},
					{class:"tank", id: 3, movement : [{X: 700, Y: 450}, {X: 600, Y: 325}], rotation : 22.25},
					{class:"tank", id: 4, movement : [{X: 700, Y: 550}, {X: 600, Y: 450}], rotation : 112.25},
					{class:"tank", id: 1, movement : [{X: 650, Y: 450}, {X: 550, Y: 325}], rotation : 202.25},
					{class:"tank", id: 2, movement : [{X: 650, Y: 550}, {X: 550, Y: 450}], rotation : 292.25}
					]
			}
			,
			{
				time : 6,
				duration : 2000,
				descriptionId : 0,
				path : [
					{class:"tank", id: 3, movement : [ {X: 700, Y: 325}, {X: 700, Y: 325}], rotation : 66.75},
					{class:"tank", id: 4, movement : [{X: 700, Y: 450}, {X: 700, Y: 450}], rotation : 156.75},
					{class:"tank", id: 1, movement : [{X: 650, Y: 325}, {X: 650, Y: 325}], rotation : 246.75},
					{class:"tank", id: 2, movement : [{X: 650, Y: 450}, {X: 650, Y: 450}], rotation : 336.75},
					{class:"tank", id: 3, movement : [ {X: 600, Y: 325}, {X: 600, Y: 525}], rotation : 22.25},
					{class:"tank", id: 4, movement : [ {X: 600, Y: 450}, {X: 600, Y: 750}], rotation : 112.25},
					{class:"tank", id: 1, movement :  [{X: 550, Y: 325}, {X: 550, Y: 525}], rotation : 202.25},
					{class:"tank", id: 2, movement :  [{X: 550, Y: 450}, {X: 550, Y: 750}], rotation : 292.25}
					]
			}
			,
			{
				time : 8,
				duration : 5000,
				descriptionId : 0,
				path : [
					{class:"tank", id: 3, movement : [{X: 700, Y: 325}, 	{X: 150, Y: 325}]	, rotation : 66.75},
					{class:"tank", id: 4, movement : [{X: 700, Y: 450},	{X: 150, Y: 450}]	, rotation : 156.75},
					{class:"tank", id: 1, movement : [{X: 650, Y: 325},	{X: 100, Y: 325}]	, rotation : 246.75},
					{class:"tank", id: 2, movement : [{X: 650, Y: 450},	{X: 100, Y: 450}]	, rotation : 336.75},
					{class:"tank", id: 3, movement : [ {X: 600, Y: 525}, {X: 50, Y: 525}]	, rotation : 22.25},
					{class:"tank", id: 4, movement : [ {X: 600, Y: 750}, {X: 50, Y: 750}]	, rotation : 112.25},
					{class:"tank", id: 1, movement : [ {X: 550, Y: 525}, {X: 0, Y: 525}]	, rotation : 202.25},
					{class:"tank", id: 2, movement : [ {X: 550, Y: 750}, {X: 0, Y: 750}]	, rotation : 292.25}
					]
			}
            ,
			{
				time : 13,
				duration : 3000,
				descriptionId : 1,
				path : [
					{class:"tank", id: 3, movement : [{X: 150, Y: 325},	{X: 150, Y: 0}], rotation : 156.75},
					{class:"tank", id: 4, movement : [{X: 150, Y: 450},	{X: 150, Y: 20}],rotation : 246.75},
					{class:"tank", id: 1, movement : [{X: 100, Y: 325},	{X: 100, Y: 0}],rotation : 336.75},
					{class:"tank", id: 2, movement : [{X: 100, Y: 450},	{X: 100, Y: 20}], rotation : 66.75},
					{class:"tank", id: 3, movement :[ {X: 50, Y: 525},	{X: 50, Y: 1000}], rotation : 112.25},
					{class:"tank", id: 4, movement :[ {X: 50, Y: 750}, {X: 50, Y: 980}],rotation : 202.25},
					{class:"tank", id: 1, movement :[ {X: 0, Y: 525}, 	{X: 0, Y: 1000}],rotation : 202.25},
					{class:"tank", id: 2, movement :[ {X: 0, Y: 750}, 	{X: 0, Y: 980}], rotation : 22.25}
					]
			}
		],
		description : 	[
			{
				id : 0,
				name : "1st movement",
				instructions : [
					{
						from : 1,
						to : 6,
						text : "Dancers take each other by hand and form a circle. Starting with right feet with 6 polkas dancers move the circle counterclockwise"
					},
					{
						from : 7,
						to : 8,
						text : "Dancers, standing towards center of the circle release the hands and clap their hands 3 times"
					},
					{
						from : 9,
						to : 16,
						text : "Dancers repeat same actions from beat 1-8, but moving the circle clockwise. At the beat 16 form a square"
					}
				]
			},
			{
				id : 1,
				name : "2nd movement",
				instructions : [
					{
						from : 1,
						to : 8,
						text : "First half of pairs with waist-shoulder grasp dance the round polka towards center. When danced halfcircle around each other they return in their initial places"
					},
					{
						from : 9,
						to : 16,
						text : "Dancers repeat same actions as in beat 1-8, but moving the circle clockwise. At the beat 16 they form a square"
					}
				]
			}
		]
	}