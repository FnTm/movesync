var descOfDance = {
	stageSize : {width:1000, height:1000},
	dancers : 	[
		{class : "boy", id : 1}, {class : "boy", id : 2}, {class : "boy", id : 3}, {class : "boy", id : 4},
		{class : "girl", id : 1}, {class : "girl", id : 2}, {class : "girl", id : 3}, {class : "girl", id : 4}],
	frames : [
		{
			time : 0,
			duration : 0000,
			descriptionId : 0,
			path : [
				{class:"boy", id: 1, movement : [{X: 875, Y: 625}], rotation : 66.75}, {class:"boy", id: 2, movement : [{X: 625, Y: 125}], rotation : 156.75},
				{class:"boy", id: 3, movement : [{X: 125, Y: 625}], rotation : 246.75}, {class:"boy", id: 4, movement : [{X: 375, Y: 875}], rotation : 336.75},
				{class:"girl", id: 1, movement : [{X: 625, Y: 875}], rotation : 22.25}, {class:"girl", id: 2, movement : [{X: 875, Y: 375}], rotation : 112.25},
				{class:"girl", id: 3, movement : [{X: 375, Y: 125}], rotation : 202.25}, {class:"girl", id: 4, movement : [{X: 125, Y: 625}], rotation : 292.25}
				]
		},
		{
			time : 0,
			duration : 1500,
			descriptionId : 0,
			path : [
				{class:"boy", id: 2, movement : [{X: 875, Y: 625}], rotation : 66.75}, {class:"boy", id: 3, movement : [{X: 625, Y: 125}], rotation : 156.75},
				{class:"boy", id: 4, movement : [{X: 125, Y: 625}], rotation : 246.75}, {class:"boy", id: 1, movement : [{X: 375, Y: 875}], rotation : 336.75},
				{class:"girl", id: 2, movement : [{X: 625, Y: 875}], rotation : 22.25}, {class:"girl", id: 3, movement : [{X: 875, Y: 375}], rotation : 112.25},
				{class:"girl", id: 4, movement : [{X: 375, Y: 125}], rotation : 202.25}, {class:"girl", id: 1, movement : [{X: 125, Y: 625}], rotation : 292.25}
				]
		},
		{
			time : 1500,
			duration : 1500,
			descriptionId : 0,
			path : [
				{class:"boy", id: 3, movement : [{X: 875, Y: 625}], rotation : 66.75}, {class:"boy", id: 4, movement : [{X: 625, Y: 125}], rotation : 156.75},
				{class:"boy", id: 1, movement : [{X: 125, Y: 625}], rotation : 246.75}, {class:"boy", id: 2, movement : [{X: 375, Y: 875}], rotation : 336.75},
				{class:"girl", id: 3, movement : [{X: 625, Y: 875}], rotation : 22.25}, {class:"girl", id: 4, movement : [{X: 875, Y: 375}], rotation : 112.25},
				{class:"girl", id: 1, movement : [{X: 375, Y: 125}], rotation : 202.25}, {class:"girl", id: 2, movement : [{X: 125, Y: 625}], rotation : 292.25}
				]
		},
		{
			time : 3000,
			duration : 500,
			descriptionId : 0,
			path : [
				{class:"boy", id: 3, movement : [{X: 875, Y: 625}], rotation : 156.75}, {class:"boy", id: 4, movement : [{X: 625, Y: 125}], rotation : 246.75},
				{class:"boy", id: 1, movement : [{X: 125, Y: 625}], rotation : 336.75}, {class:"boy", id: 2, movement : [{X: 375, Y: 875}], rotation : 66.75},
				{class:"girl", id: 3, movement : [{X: 625, Y: 875}], rotation : 112.25}, {class:"girl", id: 4, movement : [{X: 875, Y: 375}], rotation : 202.25},
				{class:"girl", id: 1, movement : [{X: 375, Y: 125}], rotation : 202.25}, {class:"girl", id: 2, movement : [{X: 125, Y: 625}], rotation : 22.25}
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
					text : "Dancers take each other by hand and form a circle. Starting witf right feet with 6 polkas dancers move the circle counterclockwise"
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
			id : 0,
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