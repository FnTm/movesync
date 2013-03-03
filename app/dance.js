var danceVar = {
		stageSize : {width:1000, height:1000},
		dancers : 	[
			{class : "boy", id : 1}, {class : "boy", id : 2}, {class : "boy", id : 3}, {class : "boy", id : 4},
			{class : "girl", id : 1}, {class : "girl", id : 2}, {class : "girl", id : 3}, {class : "girl", id : 4}],
		frames : [
			{	//Standing still still 3.5s
				time : 0,
				duration : 4000,
				descriptionId : 0,
				instructionId : null,
				path : [
					{class:"boy", id: 1, movement : [{X: 875, Y: 625}, {X: 875, Y: 625}], angle : 22.25},
					{class:"boy", id: 2, movement : [{X: 625, Y: 125}, {X: 625, Y: 125}], angle : 292.25},
					{class:"boy", id: 3, movement : [{X: 125, Y: 375}, {X: 125, Y: 375}], angle : 202.25},
					{class:"boy", id: 4, movement : [{X: 375, Y: 875}, {X: 375, Y: 875}], angle : 112.25},
					{class:"girl", id: 1, movement : [{X: 625, Y: 875}, {X: 625, Y: 875}], angle : 66.75},
					{class:"girl", id: 2, movement : [{X: 875, Y: 375}, {X: 875, Y: 375}], angle : 336.75},
					{class:"girl", id: 3, movement : [{X: 375, Y: 125}, {X: 375, Y: 125}], angle : 246.75},
					{class:"girl", id: 4, movement : [{X: 125, Y: 625}, {X: 125, Y: 625}], angle : 156.75}
					]
			},
			{	//3 polkas, 90 degrees in 3s
				time : 3,
				duration : 3000,
				descriptionId : 1,
				instructionId : 1,
				path : [
					{class:"boy", id: 1, movement : [{X: 750, Y: 1000}, {X: 375, Y: 875}], angle : 112.25},
					{class:"boy", id: 2, movement : [{X: 1000, Y: 250}, {X: 875, Y: 625}], angle : 22.25},
					{class:"boy", id: 3, movement : [{X: 250, Y: 0}, {X: 625, Y: 125}], angle : 292.25},
					{class:"boy", id: 4, movement : [{X: 0, Y: 750}, {X: 125, Y: 375}], angle : 202.25},
					{class:"girl", id: 1, movement : [{X: 250, Y: 1000}, {X: 125, Y: 625}], angle : 156.75},
					{class:"girl", id: 2, movement : [{X: 1000, Y: 750}, {X: 625, Y: 875}], angle : 66.75},
					{class:"girl", id: 3, movement : [{X: 750, Y: 0}, {X: 875, Y: 375}], angle : 336.75},
					{class:"girl", id: 4, movement : [{X: 0, Y: 250}, {X: 375, Y: 125}], angle : 246.75}
					]
			},
			{	//3 polkas, 90 more degrees in 3s
				time : 6,
				duration : 3000,
				descriptionId : 0,
				instructionId : 1,
				path : [
					{class:"boy", id: 1, movement : [{X: 0, Y: 750}, {X: 125, Y: 375}], angle : 202.25},
					{class:"boy", id: 2, movement : [{X: 750, Y: 1000}, {X: 375, Y: 875}], angle : 112.25},
					{class:"boy", id: 3, movement : [{X: 1000, Y: 250}, {X: 875, Y: 625}], angle : 22.25},
					{class:"boy", id: 4, movement : [{X: 250, Y: 0}, {X: 625, Y: 125}], angle : 292.25},
					{class:"girl", id: 1, movement : [{X: 0, Y: 250}, {X: 375, Y: 125}], angle : 246.75},
					{class:"girl", id: 2, movement : [{X: 250, Y: 1000}, {X: 125, Y: 625}], angle : 156.75},
					{class:"girl", id: 3, movement : [{X: 1000, Y: 750}, {X: 625, Y: 875}], angle : 66.75},
					{class:"girl", id: 4, movement : [{X: 750, Y: 0}, {X: 875, Y: 375}], angle : 336.75}
					]
			},
			{	//Standing still for 3 claps , 2s
				time : 9,
				duration : 500,
				descriptionId : 0,
				instructionId : 2,
				path : [
					{class:"boy", id: 1, movement : [{X: 125, Y: 375}, {X: 125, Y: 375}], angle : 292.25},
					{class:"boy", id: 2, movement : [{X: 375, Y: 875}, {X: 375, Y: 875}], angle : 202.25},
					{class:"boy", id: 3, movement : [{X: 875, Y: 625}, {X: 875, Y: 625}], angle : 112.25},
					{class:"boy", id: 4, movement : [{X: 625, Y: 125}, {X: 625, Y: 125}], angle : 22.25},
					{class:"girl", id: 1, movement : [{X: 375, Y: 125}, {X: 375, Y: 125}], angle : 336.75},
					{class:"girl", id: 2, movement : [{X: 125, Y: 625}, {X: 125, Y: 625}], angle : 246.75},
					{class:"girl", id: 3, movement : [{X: 625, Y: 875}, {X: 625, Y: 875}], angle : 156.75},
					{class:"girl", id: 4, movement : [{X: 875, Y: 375}, {X: 875, Y: 375}], angle : 66.75}
					]
			},
			{	//same here
				time : 10,
				duration : 500,
				descriptionId : 0,
				instructionId : 2,
				path : [
					{class:"boy", id: 1, movement : [{X: 125, Y: 375}, {X: 125, Y: 375}], angle : 22.25},
					{class:"boy", id: 2, movement : [{X: 375, Y: 875}, {X: 375, Y: 875}], angle : 292.25},
					{class:"boy", id: 3, movement : [{X: 875, Y: 625}, {X: 875, Y: 625}], angle : 202.25},
					{class:"boy", id: 4, movement : [{X: 625, Y: 125}, {X: 625, Y: 125}], angle : 102.25},
					{class:"girl", id: 1, movement : [{X: 375, Y: 125}, {X: 375, Y: 125}], angle : 66.75},
					{class:"girl", id: 2, movement : [{X: 125, Y: 625}, {X: 125, Y: 625}], angle : 336.75},
					{class:"girl", id: 3, movement : [{X: 625, Y: 875}, {X: 625, Y: 875}], angle : 246.75},
					{class:"girl", id: 4, movement : [{X: 875, Y: 375}, {X: 875, Y: 375}], angle : 156.75}
					]
			},
			{	//3 polkas, 90 degrees back in 3s
				time : 11,
				duration : 3000,
				descriptionId : 0,
				instructionId : 3,
				path : [
					{class:"boy", id: 1, movement : [{X: 0, Y: 750}, {X: 375, Y: 875}], angle : 292.25},
					{class:"boy", id: 2, movement : [{X: 750, Y: 1000}, {X: 875, Y: 625}], angle : 202.25},
					{class:"boy", id: 3, movement : [{X: 1000, Y: 250}, {X: 625, Y: 125}], angle : 112.25},
					{class:"boy", id: 4, movement : [{X: 250, Y: 0}, {X: 125, Y: 375}], angle : 22.25},
					{class:"girl", id: 1, movement : [{X: 0, Y: 250}, {X: 125, Y: 625}], angle : 336.75},
					{class:"girl", id: 2, movement : [{X: 250, Y: 1000}, {X: 625, Y: 875}], angle : 246.75},
					{class:"girl", id: 3, movement : [{X: 1000, Y: 750}, {X: 875, Y: 375}], angle : 156.75},
					{class:"girl", id: 4, movement : [{X: 750, Y: 0}, {X: 375, Y: 125}], angle : 66.75}
					]
			},
			{	//3 polkas, 90 degrees in 3s
				time : 14,
				duration : 3000,
				descriptionId : 1,
				instructionId : 3,
				path : [
					{class:"boy", id: 1, movement : [{X: 750, Y: 1000}, {X: 875, Y: 625}], angle : 202.25},
					{class:"boy", id: 2, movement : [{X: 1000, Y: 250}, {X: 625, Y: 125}], angle : 112.25},
					{class:"boy", id: 3, movement : [{X: 250, Y: 0}, {X: 125, Y: 375}], angle : 22.25},
					{class:"boy", id: 4, movement : [{X: 0, Y: 750}, {X: 375, Y: 875}], angle : 292.25},
					{class:"girl", id: 1, movement : [{X: 250, Y: 1000}, {X: 625, Y: 875}], angle : 246.75},
					{class:"girl", id: 2, movement : [{X: 1000, Y: 750}, {X: 875, Y: 375}], angle : 156.75},
					{class:"girl", id: 3, movement : [{X: 750, Y: 0}, {X: 375, Y: 125}], angle : 66.75},
					{class:"girl", id: 4, movement : [{X: 0, Y: 250}, {X: 125, Y: 625}], angle : 336.75}
					]
			},
			{	//Standing still for 3 claps , 2s
				time : 17,
				duration : 500,
				descriptionId : 0,
				instructionId : 3,
				path : [
					{class:"boy", id: 1, movement : [{X: 875, Y: 625}, {X: 875, Y: 625}], angle : 112.25},
					{class:"boy", id: 2, movement : [{X: 625, Y: 125}, {X: 625, Y: 125}], angle : 22.25},
					{class:"boy", id: 3, movement : [{X: 125, Y: 375}, {X: 125, Y: 375}], angle : 292.25},
					{class:"boy", id: 4, movement : [{X: 375, Y: 875}, {X: 375, Y: 875}], angle : 202.25},
					{class:"girl", id: 1, movement : [{X: 625, Y: 875}, {X: 625, Y: 875}], angle : 156.75},
					{class:"girl", id: 2, movement : [{X: 875, Y: 375}, {X: 875, Y: 375}], angle : 66.75},
					{class:"girl", id: 3, movement : [{X: 375, Y: 125}, {X: 375, Y: 125}], angle : 336.75},
					{class:"girl", id: 4, movement : [{X: 125, Y: 625}, {X: 125, Y: 625}], angle : 246.75}
					]
			},


			//SECONT MOVEMENT//
			{	//forming little windmills
				time : 19,
				duration : 1000,
				descriptionId : 2,
				instructionId : 4,
				path : [
					{class:"boy", id: 1, movement : [{X: 875, Y: 500}], angle : 180},
					{class:"boy", id: 2, movement : [{X: 625, Y: 500}], angle : 0},
					{class:"boy", id: 3, movement : [{X: 125, Y: 500}], angle : 0},
					{class:"boy", id: 4, movement : [{X: 375, Y: 500}], angle : 180},
					{class:"girl", id: 1, movement : [{X: 750, Y: 625}], angle : 270},
					{class:"girl", id: 2, movement : [{X: 750, Y: 375}], angle : 90},
					{class:"girl", id: 3, movement : [{X: 250, Y: 375}], angle : 90},
					{class:"girl", id: 4, movement : [{X: 250, Y: 625}], angle : 270}
					]
			},
			{	//forming little windmills, moving 90 degrees
				time : 20,
				duration : 1000,
				descriptionId : 2,
				instructionId : 4,
				path : [
					{class:"boy", id: 1, movement : [{X: 875, Y: 375}, {X: 750, Y: 375}], angle : 90},
					{class:"boy", id: 2, movement : [{X: 625, Y: 625}, {X: 750, Y: 625}], angle : 270},
					{class:"boy", id: 3, movement : [{X: 125, Y: 625}, {X: 250, Y: 625}], angle : 270},
					{class:"boy", id: 4, movement : [{X: 375, Y: 375}, {X: 250, Y: 375}], angle : 90},
					{class:"girl", id: 1, movement : [{X: 875, Y: 625}, {X: 875, Y: 500}], angle : 180},
					{class:"girl", id: 2, movement : [{X: 625, Y: 375}, {X: 625, Y: 500}], angle : 0},
					{class:"girl", id: 3, movement : [{X: 125, Y: 375}, {X: 125, Y: 500}], angle : 0},
					{class:"girl", id: 4, movement : [{X: 375, Y: 625}, {X: 375, Y: 500}], angle : 180}
					]
			},
			{	//forming little windmills, moving 90 degrees
				time : 21,
				duration : 1000,
				descriptionId : 2,
				instructionId : 4,
				path : [
					{class:"boy", id: 1, movement : [{X: 625, Y: 375}, {X: 625, Y: 500}], angle : 0},
					{class:"boy", id: 2, movement : [{X: 875, Y: 625}, {X: 875, Y: 500}], angle : 180},
					{class:"boy", id: 3, movement : [{X: 375, Y: 625}, {X: 375, Y: 500}], angle : 180},
					{class:"boy", id: 4, movement : [{X: 125, Y: 375}, {X: 125, Y: 500}], angle : 0},
					{class:"girl", id: 1, movement : [{X: 875, Y: 375}, {X: 750, Y: 375}], angle : 90},
					{class:"girl", id: 2, movement : [{X: 625, Y: 625}, {X: 750, Y: 625}], angle : 270},
					{class:"girl", id: 3, movement : [{X: 125, Y: 625}, {X: 250, Y: 625}], angle : 270},
					{class:"girl", id: 4, movement : [{X: 375, Y: 375}, {X: 250, Y: 375}], angle : 90}
					]
			},

		],
		description : 	[
			{
				id : 0,
				name : "1st movement",
				instructions : [
					{
						id : 1,
						from : 1,
						to : 6,
						text : "Dancers take each other by hand and form a circle. Starting with right feet with 6 polkas dancers move the circle counterclockwise"
					},
					{
						id : 2,
						from : 7,
						to : 8,
						text : "Dancers, standing towards center of the circle release the hands and clap their hands 3 times"
					},
					{
						id : 3,
						from : 9,
						to : 16,
						text : "Dancers repeat same actions from beats 1-8, but moving the circle clockwise. At the beat 16 form a square"
					}
				]
			},
			{
				id : 1,
				name : "2nd movement",
				instructions : [
					{
						id : 4,
						from : 1,
						to : 8,
						text : "First half of pairs with waist-shoulder grasp dance the round polka towards center. When danced halfcircle around each other they return in their initial places"
					},
					{
						id : 5,
						from : 9,
						to : 16,
						text : "Dancers repeat same actions as in beat 1-8, but moving the circle clockwise. At the beat 16 they form a square"
					}
				]
			}
		]
	}