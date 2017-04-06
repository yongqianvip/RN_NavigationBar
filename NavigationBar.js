
import React from 'react';
import {
	View,
	Text,
	Image,
	Platform,
	StyleSheet,
	TouchableOpacity,
	Alert
} from 'react-native';

import backIcon from '../../assets/img/back.png';

export default class NavigatorBar extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	  this._goback = this._goback.bind(this);
	}

	_goback() {
		if (this.props.backIconClick) {
			this.props.backIconClick();
		} else {
			if (this.props.navigator && !this.props.leftButtonHidden) this.props.navigator.pop();
		}
	}
	static defaultProps = {
		leftButtonConfig: {
			type: 'image',
			image: backIcon,
			onClick: ()=>{
				this._goback;
			}
		}
	}

	static propTypes = {
		title: React.PropTypes.string,
		centerIconStyle: Text.propTypes.style,
		leftButtonHidden: React.PropTypes.bool,
		backIconClick: React.PropTypes.func,
		leftButtonConfig: React.PropTypes.object,
		rightButtonConfig: React.PropTypes.object,
		rightSubButtonConfig: React.PropTypes.object,
		style: View.propTypes.style,
		leftIconFont: React.PropTypes.string,
		rightIconFont: React.PropTypes.string,
		rightSubIconFont: React.PropTypes.string
	}

	render() {
		const { navigator,
			title,
			centerIcon,
			centerIconStyle,
			leftButtonHidden,
			leftButtonConfig,
			leftIconFont,
			rightButtonConfig,
			rightIconFont,
			rightSubButtonConfig,
			rightSubIconFont,
			style,
		} = this.props;

		return (
			<View style={ [styles.container, style] }>
				<View style={ styles.contentContainer }>
					<View style={ styles.leftContainer }>
						{
							(() => {
								if(!leftButtonHidden) {
									if (leftButtonConfig) {
										if (leftButtonConfig.type === 'image') {
											// 左侧图片按钮
											return (
												<TouchableOpacity
													activeOpacity={ leftButtonConfig.disable ? 1 : (leftButtonConfig.activeOpacity || 0.7) }
													onPress={ leftButtonConfig.disable ? ()=>{console.log("--leftButton is disabled");} : leftButtonConfig.onClick }>
													<View>
														<Image style={ [styles.leftImageStyle,leftButtonConfig.imageStyle] } source={ leftButtonConfig.disable ? leftButtonConfig.disableImage : leftButtonConfig.image }/>
													</View>
												</TouchableOpacity>
											)
										}else if (leftButtonConfig.type === 'string' || leftButtonConfig.type === 'font') {
											// 左侧纯文本按钮
											return (
												<TouchableOpacity
													activeOpacity={ leftButtonConfig.disable ? 1 : (leftButtonConfig.activeOpacity || 0.7) }
													onPress={ leftButtonConfig.disable ? ()=>{console.log("--leftButton is disabled");} : leftButtonConfig.onClick }>
													<Text style={ [(leftButtonConfig.type === 'string' ? styles.leftTitleStyle : styles.leftIconFontStyle), leftButtonConfig.titleStyle,leftButtonConfig.disable ? {color: leftButtonConfig.disableColor || 'gray'} : {}]}>{ leftButtonConfig.type === 'string' ? leftButtonConfig.title : leftIconFont }</Text>
												</TouchableOpacity>
											)
										}else{
											return null
										}
									}
								}else{
									// 隐藏 左按钮
									return null
								}
							})()
						}
					</View>
					<View style={ styles.centerContainer }>
						{
							title ?
								<Text style={ styles.centerTextStyle }>{ title }</Text>
							:
								<Image resizeMode='stretch' style={ [styles.centerImg, centerIconStyle] } source={ centerIcon }/>
						}
					</View>

					<View style={ styles.rightContainer }>
						{
							(() => {
								if (rightButtonConfig) {
									if (rightSubButtonConfig) {
										// 多个按钮
										if (rightButtonConfig.type === 'image' && rightSubButtonConfig.type === 'image') {
											return (
												<View style={{flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
													<TouchableOpacity
														activeOpacity={ rightButtonConfig.disable ? 1 : (rightButtonConfig.activeOpacity || 0.7) }
														onPress={ rightButtonConfig.disable ? ()=>{console.log("---rightButton is disabled");} : rightButtonConfig.onClick }>
														<View>
															<Image style={ [styles.rightImageStyle,rightButtonConfig.imageStyle] } source={ rightButtonConfig.disable ? rightButtonConfig.disableImage : rightButtonConfig.image }/>
														</View>
													</TouchableOpacity>
													<TouchableOpacity
														activeOpacity={ rightSubButtonConfig.disable ? 1 : (rightSubButtonConfig.activeOpacity || 0.7) }
														onPress={ rightSubButtonConfig.disable ? ()=>{console.log("---rightSubButton is disabled");} : rightSubButtonConfig.onClick }>
														<View>
															<Image style={ [styles.rightImageStyle,rightSubButtonConfig.imageStyle] } source={ rightSubButtonConfig.disable ? rightSubButtonConfig.disableImage : rightSubButtonConfig.image }/>
														</View>
													</TouchableOpacity>
												</View>
											)
										}else if (rightButtonConfig.type != 'image' && rightSubButtonConfig.type != 'image') {
											return (
												<View style={{flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
													<TouchableOpacity
														activeOpacity={ rightButtonConfig.disable ? 1 : (rightButtonConfig.activeOpacity || 0.7) }
														onPress={ rightButtonConfig.disable ? ()=>{console.log("--rightButton is disabled")} : rightButtonConfig.onClick }>
														<Text style={ [(rightButtonConfig.type === 'string' ? styles.rightTitleStyle : styles.rightIconFontStyle), rightButtonConfig.titleStyle,rightButtonConfig.disable ? {color: rightButtonConfig.disableColor || 'gray'} : {}] }>{ rightButtonConfig.type === 'string' ? rightButtonConfig.title : rightIconFont }</Text>
													</TouchableOpacity>
													<TouchableOpacity
														activeOpacity={ rightSubButtonConfig.disable ? 1 : (rightSubButtonConfig.activeOpacity || 0.7) }
														onPress={ rightSubButtonConfig.disable ? ()=>{console.log("--rightSubButton is disabled");} : rightSubButtonConfig.onClick }>
														<Text style={ [(rightSubButtonConfig.type === 'string' ? styles.rightTitleStyle : styles.rightIconFontStyle), rightSubButtonConfig.titleStyle,rightSubButtonConfig.disable ? {color: rightSubButtonConfig.disableColor || 'gray'} : {}]}>{ rightSubButtonConfig.type === 'string' ? rightSubButtonConfig.title : rightSubIconFont }</Text>
													</TouchableOpacity>
												</View>
											)
										}else{
											console.warn("right button 不支持两个不同类型的button，例如rightButton.type='image',rightSubButton.type='string'");
											return null
										}
									}else{
										// 单个按钮
										if (rightButtonConfig.type === 'image') {
											// 右侧图片按钮
											return (
												<TouchableOpacity
													activeOpacity={ rightButtonConfig.disable ? 1 : (rightButtonConfig.activeOpacity || 0.7) }
													onPress={ rightButtonConfig.disable ? ()=>{console.log("--rightButton is disabled");} : rightButtonConfig.onClick }>
													<View>
														<Image style={ [styles.rightImageStyle,rightButtonConfig.imageStyle] } source={ rightButtonConfig.disable ? rightButtonConfig.disableImage : rightButtonConfig.image }/>
													</View>
												</TouchableOpacity>
											)
										}else if (rightButtonConfig.type === 'font' || rightButtonConfig.type === 'string') {
											// 右侧纯文本按钮
											return (
												<TouchableOpacity
													activeOpacity={ rightButtonConfig.disable ? 1 : (rightButtonConfig.activeOpacity || 0.7) }
													onPress={ rightButtonConfig.disable ? ()=>{console.log("--rightButton is disabled");} : rightButtonConfig.onClick }>
													<Text style={ [(rightButtonConfig.type === 'string' ? styles.rightTitleStyle : styles.rightIconFontStyle), rightButtonConfig.titleStyle,rightButtonConfig.disable ? {color: rightButtonConfig.disableColor || 'gray'} : {}] }>{ rightButtonConfig.type === 'string' ? rightButtonConfig.title : rightIconFont }</Text>
												</TouchableOpacity>
											)
										}
									}
								}else{
									// 没有按钮
									return null
								}
							})()
						}
					</View>

				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		...Platform.select({
			ios: {
				height: 64,
			},
			android: {
				height: 50
			}
		}),
		backgroundColor: '#008dcf',
	},
	contentContainer: {
		flex: 1,
		...Platform.select({
			ios: {
				paddingTop: 15,
			},
			android: {
				paddingTop: 0,
			}
		}),
		flexDirection: 'row',
	},
	leftContainer: {
		flex: 1,
		justifyContent: 'center',

	},
	centerContainer: {
		flex: 2,
		justifyContent: 'center',
	},
	rightContainer: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',

	},
	leftImageStyle: {
		width: 20,
		height: 20,
		marginLeft: 10,
	},
	rightImageStyle: {
		width: 20,
		height: 20,
		marginRight: 10,
	},
	centerTextStyle: {
		textAlign: 'center',
		color: 'white',
		fontSize: 18,
	},
	leftIconFontStyle: {
		marginLeft: 10,
		fontSize: 20,
		color: 'white',
		fontFamily: 'iconfont',
	},
	rightIconFontStyle: {
		marginRight: 10,
		fontSize: 20,
		color: 'white',
		fontFamily: 'iconfont',
	},
	leftTitleStyle: {
		color: 'white',
		marginLeft: 10,
	},
	rightTitleStyle: {
		color: 'white',
		marginRight: 10
	},
	centerImg: {
		alignSelf: 'center',
	}
});
