import leoAngry from '../../static/images/characters/leo/Leo_angry.png'
import leoCry from '../../static/images/characters/leo/Leo_crying.png'
import leoHappy from '../../static/images/characters/leo/Leo_happy.png'
import leoNormal from '../../static/images/characters/leo/Leo_normal.png'
import leoSad from '../../static/images/characters/leo/Leo_sad.png'
import leoSmile from '../../static/images/characters/leo/Leo_smiling.png'
import leoSmirk from '../../static/images/characters/leo/Leo_smirking.png'
import dog from '../../static/images/characters/dog/dog.png'
import dogAtk from '../../static/images/characters/dog/dog_attack.png'
import bgStreet from '../../static/images/backgrounds/cityStreet.jpg'
import bread from '../../static/images/items/bread.png'

let story = [
	//index = 0
	{ route : [
		{
			bg: bgStreet,
			image: leoNormal,
			text: 'Hola soy un chico normal'
		},
		{
			bg: bgStreet,
			image: leoNormal,
			text: 'En algun momento de mi vida'
		},
		{
			bg: bgStreet,
			image: leoHappy,
			text: 'Descubri que me gustaba caminar'
		},
		{
			bg: bgStreet,
			image: leoSmile,
			text: 'Y por eso empece mi aventura de descubrir nuevos lugares'
		},
		{
			bg: bgStreet,
			image: leoSad,
			text: 'Un dia como cualquier otro me encontre con un perro callejero'
		},
		{
			bg: bgStreet,
			image: dog,
			text: 'Era un perro negro grandote parecia inofensivo hasta que pase por su lado'
		},
		{
			bg: bgStreet,
			image: leoNormal,
			text: 'Entonces el perro me empezo a gruñir y lo vi acercarse a mi'
		},
		{
			bg: bgStreet,
			image: leoNormal,
			text: 'Inmediatamente pense en huir pero sabia que el perro no me haria nada si no hacia algo'
		},
		{
			bg: bgStreet,
			image: dog,
			text: 'El perro se calmo un poco... es mi momento de actuar'
		},
	]
	},
	//index = 1
	{ route : [
		{
			bg: bgStreet,
			image: '',
			text: '*Sale corriendo'
		},
		{
			bg: bgStreet,
			image: dogAtk,
			text: '...'
		},
		{
			bg: bgStreet,
			image: dogAtk,
			text: 'Habia pensado la posiblidad'
		},
		{
			bg: bgStreet,
			image: '',
			text: 'Pero no crei que pasaria'
		},
		{
			bg: bgStreet,
			image: leoCry,
			text: 'Y ahora que hago? '
		},
		{
			bg: bgStreet,
			image: dogAtk,
			text: 'El perro me alcanzo y ahora no hay nada que hacer'
		},
		{
			bg: bgStreet,
			image: leoCry,
			text: 'Estoy intentado soltarme pero duele...'
		},
		{
			bg: bgStreet,
			image: leoSad,
			text: 'El perro esta mordiendo muy fuertemente mi pierna'
		},
		{
			bg: bgStreet,
			image: leoSad,
			text: 'Creo que voy a morir...'
		},
	]
	},
	//index = 2
	{ route : [
		{
			bg: bgStreet,
			image: leoAngry,
			text: 'En el momento que se calmo'
		},
		{
			bg: bgStreet,
			image: leoNormal,
			text: 'Saque mi mochila'
		},
		{
			bg: bgStreet,
			image: bread,
			text: 'Y tenia un pan casero'
		},
		{
			bg: bgStreet,
			image: dog,
			text: 'El perro sintio el aroma'
		},
		{
			bg: bgStreet,
			image: dogAtk,
			text: 'Y se emociono, una mezcla de enfado y desesperacion por ver comida'
		},
		{
			bg: bgStreet,
			image: leoAngry,
			text: 'Lo vi e inmediatamente arroje el pan lejos pero a la vista del perro'
		},
		{
			bg: bgStreet,
			image: dogAtk,
			text: 'Salio corriendo buscando el pan'
		},
		{
			bg: bgStreet,
			image: leoSmirk,
			text: 'Y yo aproveche mi momento para escapar'
		},
		{
			bg: bgStreet,
			image: leoSmile,
			text: 'Sera una gran anecdota: el dia en que casi me come un perro'
		},
	]
	},
]

export default story