import { mainData as data } from './data.js';

const list = document.createElement('ol')
document.body.append(list)
function preparedData(data) {
  for( const value of data) {
		for(const group in value) {
			for(const element of value[group]) {
				if(!element.hasOwnProperty('price')) {
					element = {
						...element,
						price: [{text: 'field empty'}]
					}
				}
				for(const field in element) {
					if(element[field].length === 0) {
						console.log(element[field])
						element[field] = [{text: 'not found'}]
					}
				}
			}
		}
	}
	console.log(data)
	return data;
}

const result = preparedData(data)

console.log(data)

function addList(data) {
	for( const value of data) {
		for (const group in value) {
			for(const element of value[group]){
			const li = document.createElement('li')
			console.log(element)
			li.insertAdjacentHTML('afterbegin' , `
				<span>Brand: ${element.brand[0].text}</span>
				<br>
				<span>Price: ${element.price ? element.price[0].text : "price"}</span>
				<br>
				<span>Category: ${element.category[0].text}</span>
				<br>
				<span>ProductUrl:${element.productUrl[0].text}</span>
				<br>
				<span>thumbnail:${element.thumbnail[0].text}</span>
				<br>
				<span>name:${element.name[0].text}</span>
				<br>
				<span>nameExtended:${element.nameExtended[0].text}</span>
				<br>
				<span>rankOrganic:${element.rankOrganic[0].text}</span>
				<br>
				<span>rank:${element.rank[0].text}</span>
				<br>
			`)
			list.append(li)
			}
		}
	}
}



addList(result)
