import React from 'react';
import LottieView from "lottie-react-native";
import { 
    AccountBackground, 
    AccountCover, 
    AccountContainer, 
    AuthButton,
    AnimationWrapper,
    Title } from "../components/account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return <AccountBackground>
        <AccountCover />
        <AnimationWrapper>
            <LottieView
            style={{flex: 1}}
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../../../../assets/watermelon.json")}
            />
        </AnimationWrapper>
        <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={() => navigation.navigate("Login")}
                >
                Login
                </AuthButton>

                <Spacer size="large">

                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Register")}
                >
                    Register
                </AuthButton>

                </Spacer>
                
        </AccountContainer>
    </AccountBackground >;
};