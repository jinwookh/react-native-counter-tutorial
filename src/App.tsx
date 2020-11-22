/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native';

const ScrollView = Styled.ScrollView`
  background-color: ${Colors.lighter};
  `;

const Body = Styled.View`background-color: ${Colors.dark}`;

const SectionContainer = Styled.View`margin-top: 32px;
padding-horizontal: 24px;`;

const SectionDescription = Styled.Text`margin-top: 8px;
font-size: 18px;
font-weight: 400;
color: ${Colors.white}`;

const HighLight = Styled.Text`font-weight: 700;`;

interface Props {}




const App = ({ }: Props) => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior={"automatic"}>
                    <Header/>
                    <Body>
                        <SectionContainer>
                            <SectionDescription>
                                Step one! two! three!
                            </SectionDescription>
                            <SectionDescription>
                                Edit <HighLight>at here!</HighLight> Got cha haha

                            </SectionDescription>
                            <SectionDescription>
                                See your changes.
                            </SectionDescription>
                            <SectionDescription>
                                <ReloadInstructions/>

                            </SectionDescription>
                        </SectionContainer>
                        <SectionContainer>
                            <SectionDescription>DEBUG</SectionDescription>
                            <SectionDescription>
                                <DebugInstructions/>
                            </SectionDescription>

                        </SectionContainer>
                        <SectionContainer>
                            <SectionDescription>
                                Learn more!!! Come here.
                            </SectionDescription>
                            <SectionDescription>
                                Read the documentation to do next:
                            </SectionDescription>
                        </SectionContainer>
                        <LearnMoreLinks/>


                    </Body>
                </ScrollView>

            </SafeAreaView>
        </Fragment>
    );
};




export default App;
