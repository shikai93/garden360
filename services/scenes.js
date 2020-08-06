export default {
    Canteen : {
        name : "Canteen",
        navigationPoints : [
            {
                width : 100,
                height : 100,
                yaw : 0,
                pitch : 0,
                destination : "Garden",
                label : "Garden"
            }
        ],
        tooltips : [
            {
                width : 50,
                height : 50,
                yaw : Math.PI / 6,
                pitch : -Math.PI / 16,
                text : "Canteen is a place where students can eat and enjoy their recess!",
                image : "landmarks/Canteen.jpg",
            },
            {
                width : 50,
                height : 50,
                yaw : -Math.PI / 6,
                pitch : 0,
                text : "Students have to wash their hands here before they eat!",
                image : "infoImage/sink.jpg",
            }
        ]
    },
    Garden : {
        name : "Garden",
        navigationPoints : [
            {
                width : 100,
                height : 100,
                yaw : 0,
                pitch : 0,
                destination : "Canteen",
                label : "Canteen"
            }
        ],
        tooltips : [
            {
                width : 50,
                height : 50,
                yaw : Math.PI / 4,
                pitch : Math.PI / 16,
                text : "The Orchid is our national flower!",
                image : "infoImage/orchid.jpg",
            },
            {
                width : 50,
                height : 50,
                yaw : -Math.PI / 4,
                pitch : 0,
                text : "Pretty as it may look, the rafflesia can let off a pungent smell",
                image : "infoImage/rafflesia.jpg",
            }
        ]
    }
}