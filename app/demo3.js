
var rag = {
		stageSize : {width:1000, height:1000},
		dancers : 	[
			{class : "ragnar", id : 1}, {class : "ragnar", id : 2}, {class : "ragnar", id : 3}, {class : "ragnar", id : 4},
			{class : "maarika", id : 1}, {class : "maarika", id : 2}, {class : "maarika", id : 3}, {class : "maarika", id : 4}],
		frames : [
			{	//Standing still still 3.5s
				time : 0,
				duration : 4000,
				descriptionId : 0,
				instructionId : null,
				path : [
					{class:"ragnar", id: 1, movement : [{X: 875, Y: 625}, {X: 875, Y: 625}], angle : 22.25},
					{class:"ragnar", id: 2, movement : [{X: 625, Y: 125}, {X: 625, Y: 125}], angle : 292.25},
					{class:"ragnar", id: 3, movement : [{X: 125, Y: 375}, {X: 125, Y: 375}], angle : 202.25},
					{class:"ragnar", id: 4, movement : [{X: 375, Y: 875}, {X: 375, Y: 875}], angle : 112.25},
					{class:"maarika", id: 1, movement : [{X: 625, Y: 875}, {X: 625, Y: 875}], angle : 66.75},
					{class:"maarika", id: 2, movement : [{X: 875, Y: 375}, {X: 875, Y: 375}], angle : 336.75},
					{class:"maarika", id: 3, movement : [{X: 375, Y: 125}, {X: 375, Y: 125}], angle : 246.75},
					{class:"maarika", id: 4, movement : [{X: 125, Y: 625}, {X: 125, Y: 625}], angle : 156.75}
					]
			},
			{	//3 polkas, 90 degrees in 3s
				time : 3,
				duration : 3000,
				descriptionId : 1,
				instructionId : 1,
				path : [
					{class:"ragnar", id: 1, movement : [{X: 750, Y: 1000}, {X: 375, Y: 875}], angle : 112.25},
					{class:"ragnar", id: 2, movement : [{X: 1000, Y: 250}, {X: 875, Y: 625}], angle : 22.25},
					{class:"ragnar", id: 3, movement : [{X: 250, Y: 0}, {X: 625, Y: 125}], angle : 292.25},
					{class:"ragnar", id: 4, movement : [{X: 0, Y: 750}, {X: 125, Y: 375}], angle : 202.25},
					{class:"maarika", id: 1, movement : [{X: 250, Y: 1000}, {X: 125, Y: 625}], angle : 156.75},
					{class:"maarika", id: 2, movement : [{X: 1000, Y: 750}, {X: 625, Y: 875}], angle : 66.75},
					{class:"maarika", id: 3, movement : [{X: 750, Y: 0}, {X: 875, Y: 375}], angle : 336.75},
					{class:"maarika", id: 4, movement : [{X: 0, Y: 250}, {X: 375, Y: 125}], angle : 246.75}
					]
			},
			{	//3 polkas, 90 more degrees in 3s
				time : 6,
				duration : 3000,
				descriptionId : 0,
				instructionId : 1,
				path : [
					{class:"ragnar", id: 1, movement : [{X: 0, Y: 750}, {X: 125, Y: 375}], angle : 202.25},
					{class:"ragnar", id: 2, movement : [{X: 750, Y: 1000}, {X: 375, Y: 875}], angle : 112.25},
					{class:"ragnar", id: 3, movement : [{X: 1000, Y: 250}, {X: 875, Y: 625}], angle : 22.25},
					{class:"ragnar", id: 4, movement : [{X: 250, Y: 0}, {X: 625, Y: 125}], angle : 292.25},
					{class:"maarika", id: 1, movement : [{X: 0, Y: 250}, {X: 375, Y: 125}], angle : 246.75},
					{class:"maarika", id: 2, movement : [{X: 250, Y: 1000}, {X: 125, Y: 625}], angle : 156.75},
					{class:"maarika", id: 3, movement : [{X: 1000, Y: 750}, {X: 625, Y: 875}], angle : 66.75},
					{class:"maarika", id: 4, movement : [{X: 750, Y: 0}, {X: 875, Y: 375}], angle : 336.75}
					]
			},
			{	//Standing still for 3 claps , 2s
				time : 9,
				duration : 500,
				descriptionId : 0,
				instructionId : 2,
				path : [
					{class:"ragnar", id: 1, movement : [{X: 125, Y: 375}, {X: 125, Y: 375}], angle : 292.25},
					{class:"ragnar", id: 2, movement : [{X: 375, Y: 875}, {X: 375, Y: 875}], angle : 202.25},
					{class:"ragnar", id: 3, movement : [{X: 875, Y: 625}, {X: 875, Y: 625}], angle : 112.25},
					{class:"ragnar", id: 4, movement : [{X: 625, Y: 125}, {X: 625, Y: 125}], angle : 22.25},
					{class:"maarika", id: 1, movement : [{X: 375, Y: 125}, {X: 375, Y: 125}], angle : 336.75},
					{class:"maarika", id: 2, movement : [{X: 125, Y: 625}, {X: 125, Y: 625}], angle : 246.75},
					{class:"maarika", id: 3, movement : [{X: 625, Y: 875}, {X: 625, Y: 875}], angle : 156.75},
					{class:"maarika", id: 4, movement : [{X: 875, Y: 375}, {X: 875, Y: 375}], angle : 66.75}
					]
			},
			{	//same here
				time : 10,
				duration : 500,
				descriptionId : 0,
				instructionId : 2,
				path : [
					{class:"ragnar", id: 1, movement : [{X: 125, Y: 375}, {X: 125, Y: 375}], angle : 22.25},
					{class:"ragnar", id: 2, movement : [{X: 375, Y: 875}, {X: 375, Y: 875}], angle : 292.25},
					{class:"ragnar", id: 3, movement : [{X: 875, Y: 625}, {X: 875, Y: 625}], angle : 202.25},
					{class:"ragnar", id: 4, movement : [{X: 625, Y: 125}, {X: 625, Y: 125}], angle : 102.25},
					{class:"maarika", id: 1, movement : [{X: 375, Y: 125}, {X: 375, Y: 125}], angle : 66.75},
					{class:"maarika", id: 2, movement : [{X: 125, Y: 625}, {X: 125, Y: 625}], angle : 336.75},
					{class:"maarika", id: 3, movement : [{X: 625, Y: 875}, {X: 625, Y: 875}], angle : 246.75},
					{class:"maarika", id: 4, movement : [{X: 875, Y: 375}, {X: 875, Y: 375}], angle : 156.75}
					]
			},
			{	//3 polkas, 90 degrees back in 3s
				time : 11,
				duration : 3000,
				descriptionId : 0,
				instructionId : 3,
				path : [
					{class:"ragnar", id: 1, movement : [{X: 0, Y: 750}, {X: 375, Y: 875}], angle : 292.25},
					{class:"ragnar", id: 2, movement : [{X: 750, Y: 1000}, {X: 875, Y: 625}], angle : 202.25},
					{class:"ragnar", id: 3, movement : [{X: 1000, Y: 250}, {X: 625, Y: 125}], angle : 112.25},
					{class:"ragnar", id: 4, movement : [{X: 250, Y: 0}, {X: 125, Y: 375}], angle : 22.25},
					{class:"maarika", id: 1, movement : [{X: 0, Y: 250}, {X: 125, Y: 625}], angle : 336.75},
					{class:"maarika", id: 2, movement : [{X: 250, Y: 1000}, {X: 625, Y: 875}], angle : 246.75},
					{class:"maarika", id: 3, movement : [{X: 1000, Y: 750}, {X: 875, Y: 375}], angle : 156.75},
					{class:"maarika", id: 4, movement : [{X: 750, Y: 0}, {X: 375, Y: 125}], angle : 66.75}
					]
			},
			{	//3 polkas, 90 degrees in 3s
				time : 14,
				duration : 3000,
				descriptionId : 1,
				instructionId : 3,
				path : [
					{class:"ragnar", id: 1, movement : [{X: 750, Y: 1000}, {X: 875, Y: 625}], angle : 202.25},
					{class:"ragnar", id: 2, movement : [{X: 1000, Y: 250}, {X: 625, Y: 125}], angle : 112.25},
					{class:"ragnar", id: 3, movement : [{X: 250, Y: 0}, {X: 125, Y: 375}], angle : 22.25},
					{class:"ragnar", id: 4, movement : [{X: 0, Y: 750}, {X: 375, Y: 875}], angle : 292.25},
					{class:"maarika", id: 1, movement : [{X: 250, Y: 1000}, {X: 625, Y: 875}], angle : 246.75},
					{class:"maarika", id: 2, movement : [{X: 1000, Y: 750}, {X: 875, Y: 375}], angle : 156.75},
					{class:"maarika", id: 3, movement : [{X: 750, Y: 0}, {X: 375, Y: 125}], angle : 66.75},
					{class:"maarika", id: 4, movement : [{X: 0, Y: 250}, {X: 125, Y: 625}], angle : 336.75}
					]
			},
			{	//Standing still for 3 claps , 2s
				time : 17,
				duration : 500,
				descriptionId : 0,
				instructionId : 3,
				path : [
					{class:"ragnar", id: 1, movement : [{X: 875, Y: 625}, {X: 875, Y: 625}], angle : 112.25},
					{class:"ragnar", id: 2, movement : [{X: 625, Y: 125}, {X: 625, Y: 125}], angle : 22.25},
					{class:"ragnar", id: 3, movement : [{X: 125, Y: 375}, {X: 125, Y: 375}], angle : 292.25},
					{class:"ragnar", id: 4, movement : [{X: 375, Y: 875}, {X: 375, Y: 875}], angle : 202.25},
					{class:"maarika", id: 1, movement : [{X: 625, Y: 875}, {X: 625, Y: 875}], angle : 156.75},
					{class:"maarika", id: 2, movement : [{X: 875, Y: 375}, {X: 875, Y: 375}], angle : 66.75},
					{class:"maarika", id: 3, movement : [{X: 375, Y: 125}, {X: 375, Y: 125}], angle : 336.75},
					{class:"maarika", id: 4, movement : [{X: 125, Y: 625}, {X: 125, Y: 625}], angle : 246.75}
					]
			},


			//SECONT MOVEMENT//
			{	//forming little windmills
				time : 19,
				duration : 1000,
				descriptionId : 2,
				instructionId : 4,
				path : [
					{class:"ragnar", id: 1, movement : [{X: 875, Y: 500}], angle : 180},
					{class:"ragnar", id: 2, movement : [{X: 625, Y: 500}], angle : 0},
					{class:"ragnar", id: 3, movement : [{X: 125, Y: 500}], angle : 0},
					{class:"ragnar", id: 4, movement : [{X: 375, Y: 500}], angle : 180},
					{class:"maarika", id: 1, movement : [{X: 750, Y: 625}], angle : 270},
					{class:"maarika", id: 2, movement : [{X: 750, Y: 375}], angle : 90},
					{class:"maarika", id: 3, movement : [{X: 250, Y: 375}], angle : 90},
					{class:"maarika", id: 4, movement : [{X: 250, Y: 625}], angle : 270}
					]
			},
			{	//forming little windmills, moving 90 degrees
				time : 20,
				duration : 1000,
				descriptionId : 2,
				instructionId : 4,
				path : [
					{class:"ragnar", id: 1, movement : [{X: 875, Y: 375}, {X: 750, Y: 375}], angle : 90},
					{class:"ragnar", id: 2, movement : [{X: 625, Y: 625}, {X: 750, Y: 625}], angle : 270},
					{class:"ragnar", id: 3, movement : [{X: 125, Y: 625}, {X: 250, Y: 625}], angle : 270},
					{class:"ragnar", id: 4, movement : [{X: 375, Y: 375}, {X: 250, Y: 375}], angle : 90},
					{class:"maarika", id: 1, movement : [{X: 875, Y: 625}, {X: 875, Y: 500}], angle : 180},
					{class:"maarika", id: 2, movement : [{X: 625, Y: 375}, {X: 625, Y: 500}], angle : 0},
					{class:"maarika", id: 3, movement : [{X: 125, Y: 375}, {X: 125, Y: 500}], angle : 0},
					{class:"maarika", id: 4, movement : [{X: 375, Y: 625}, {X: 375, Y: 500}], angle : 180}
					]
			},
			{	//forming little windmills, moving 90 degrees
				time : 21,
				duration : 1000,
				descriptionId : 2,
				instructionId : 4,
				path : [
					{class:"ragnar", id: 1, movement : [{X: 625, Y: 375}, {X: 625, Y: 500}], angle : 0},
					{class:"ragnar", id: 2, movement : [{X: 875, Y: 625}, {X: 875, Y: 500}], angle : 180},
					{class:"ragnar", id: 3, movement : [{X: 375, Y: 625}, {X: 375, Y: 500}], angle : 180},
					{class:"ragnar", id: 4, movement : [{X: 125, Y: 375}, {X: 125, Y: 500}], angle : 0},
					{class:"maarika", id: 1, movement : [{X: 875, Y: 375}, {X: 750, Y: 375}], angle : 90},
					{class:"maarika", id: 2, movement : [{X: 625, Y: 625}, {X: 750, Y: 625}], angle : 270},
					{class:"maarika", id: 3, movement : [{X: 125, Y: 625}, {X: 250, Y: 625}], angle : 270},
					{class:"maarika", id: 4, movement : [{X: 375, Y: 375}, {X: 250, Y: 375}], angle : 90}
					]
			}/*
			{	//forming little windmills, moving 90 degrees
				time : 22,
				duration : 1000,
				descriptionId : 2,
				instructionId : 4,
				path : [
					{class:"ragnar", id: 4, movement : [{X: 625, Y: 625}, {X: 750, Y: 625}], angle : 270},
					{class:"ragnar", id: 3, movement : [{X: 875, Y: 375}, {X: 750, Y: 375}], angle : 90},
					{class:"maarika", id: 6, movement : [{X: 375, Y: 625}, {X: 375, Y: 500}], angle : 180},
					{class:"maarika", id: 5, movement : [{X: 125, Y: 375}, {X: 125, Y: 500}], angle : 0},
					{class:"maarika", id: 8, movement : [{X: 625, Y: 375}, {X: 625, Y: 500}], angle : 0},
					{class:"maarika", id: 7, movement : [{X: 875, Y: 625}, {X: 875, Y: 500}], angle : 180},
					{class:"ragnar", id: 1, movement : [{X: 125, Y: 625}, {X: 250, Y: 625}], angle : 270},
					{class:"ragnar", id: 2, movement : [{X: 375, Y: 375}, {X: 250, Y: 375}], angle : 90}
					]
			},*/

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
						text : "Ragnar takes Maarika by hand and starts to spin as fast as he can. Maarika screams."
					},
					{
						id : 2,
						from : 7,
						to : 8,
						text : "Ragnar and Maarika turns towards center and claps their hands 3 times"
					},
					{
						id : 3,
						from : 9,
						to : 16,
						text : "Garage48 superheroes continue to dance by repeating same as beats 1-8, but moving the other direction"
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
						text : "Form two windmills and show us how they move"
					},
					{
						id : 5,
						from : 9,
						to : 16,
						text : "Simple dance, isn't it?"
					}
				]
			}
		]
	}