// import { Accounts, }

// import './db'
import React, { Fragment, useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import {
	Container,
	Titlebar,
	Title,
	ButtonContainer,
	DarkBackground,
	MenuItemContainer,
	MenuItemIconContainer,
	MenuItemIcon,
	MenuItemText,
	StyledIconFontAwesome
} from './styles'
import { NavigationNativeContainer } from '@react-navigation/native'



const Main = ({ navigation }) => {

	const [showMenu, setShowMenu] = useState(false)

	const menuItems = [
		{
			text: "Adicionar movimentação",
			color: "#F83",
			icon: "md-add",
			onpress: () => {
				navigation.navigate('AddTransaction')
				setShowMenu(false)
			}
		},
		{
			text: "Contas",
			color: "#83F",
			icon: "md-card",
			onpress: () => { console.log("Contas") }
		},
		{
			text: "Configurações",
			color: "#6AA",
			icon: "md-settings",
			onpress: () => { console.log("Config") }
		}
	]


	return (
		<>
			<Container>
				<Titlebar>
					<Title>Casheet</Title>
				</Titlebar>
				<ButtonContainer onPress={() => setShowMenu(!showMenu)}>
					<StyledIconFontAwesome name="md-menu" />
				</ButtonContainer>
				{showMenu && (
					<>
						<TouchableWithoutFeedback onPress={() => setShowMenu(!showMenu)} >
							<DarkBackground />
						</TouchableWithoutFeedback>
						{menuItems.map((item, index) => (
							<Fragment key={index}>
								<MenuItemContainer index={index} onPress={item.onpress}>
									<MenuItemIconContainer bgcolor={item.color}>
										<MenuItemIcon name={item.icon} />
									</MenuItemIconContainer>
									<MenuItemText>{item.text}</MenuItemText>
								</MenuItemContainer>
							</Fragment>
						))}
					</>
				)}
			</Container>
		</>
	)
}

export default Main