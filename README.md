# RN_NavigationBar
common navigationBar for react-native


##  NavigationBar
### 三种类型

- image

		<NavigatorBar
			navigator={ this.props.navigator }
			title:'LeftImageButton'
			leftButtonConfig={{
				type: 'image',
				image: signForImg,
				imageStyle:{width: 20,height:20},
				onClick: ()=>{
				
				}
			}}/>
		
- font
	
		<NavigatorBar
			navigator={ this.props.navigator }
			title:'LeftFontButton'
			leftIconFont='&#xe617;'
			leftButtonConfig={{
				type: 'font',
				disable: true,
				disableColor: 'red',
				onClick: ()=>{
					
				}
			}}/>
	
- string

		<NavigatorBar
			navigator={ this.props.navigator }
			title:'LeftStringButton'
			leftButtonConfig={{
	 			type: 'string',
		 		disable: false,
		 		title: '编辑订单',
		 		onClick: ()=>{
		 			
		 		}
		 	}}/>


### 右侧按钮最多可以设置两个 rightButton 和 rightSubButton		 	
	<NavigatorBar
		navigator={ this.props.navigator }
		title:'Right&&RightSubButton'
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