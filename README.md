# RN_NavigationBar
common navigationBar for react-native


##  NavigationBar
### 三种类型

- image

		leftButtonConfig={{
			type: 'image',
			image: signForImg,
			imageStyle:{width: 20,height:20},
			onClick: ()=>{
	
			}
		}}
		
- font

		leftIconFont='&#xe617;'
		leftButtonConfig={{
			type: 'font',
			disable: true,
			disableColor: 'red',
			onClick: ()=>{
				
			}
		}}
	
- string

		leftButtonConfig={{
 			type: 'string',
	 		disable: false,
	 		title: '编辑订单',
	 		onClick: ()=>{
	 			
	 		}
	 	}}
		 	
- rightButton && rightSubButton
	
		rightIconFont= '&#xe617;'
		rightButtonConfig={{
			type: 'font',
			titleStyle:{fontSize:25},
			disable: true,
			disableColor: 'red',
			onClick: ()=>{
				
			}
		}}
		rightSubIconFont= '&#xe617;'
		rightSubButtonConfig={{
			type: 'font',
			onClick: ()=>{

			}
		}}