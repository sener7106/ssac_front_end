import styled from 'styled-components/native'
import React, { useState, useEffect } from 'react'
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native'
import DayBtn from '../../../components/Messages/DayBtn'
import api from '../../../api'

const { width, height } = Dimensions.get('screen')
const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`
const DayText = styled.View`
  flex: 0.6;
  width: ${width / 1.05};
  margin-top: 30px;
  padding-top: 30px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: gray;
`
const DayView = styled.ScrollView`
  flex: 1;
  margin-top: 10px;
  width: ${width / 1.0};
  height: ${height / 0.4};
  border-radius: 20px;
`
const SummaryView = styled.View`
  flex: 4.7;
  width: ${width / 1.05};
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(232, 232, 232, 0.5);
`
const DayWhen = styled.Text`
  font-size: 24;
  text-align: center;
  font-weight: 400;
  color: black;
`
const Text = styled.Text`
  font-size: 18;
  font-weight: 400;
  text-align: center;
  color: black;
  margin-top: 10px;
`
const ResultText = styled.Text`
  font-size: 18;
  font-weight: 400;
  text-align: center;
  color: green;
  margin-top: 50px;
`

const Graph = () => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)

  const loadData = async () => {
    try {
      const summaryData = await api.loadSummary()
      let summaryText = summaryData.data[0].summary
      console.log(summaryText)
      setData(summaryText)
      setLoading(true)
    } catch (e) {
      console.log(`로드에 실패하였습니다.${e}`)
    }
  }

  const addData = async () => {
    await loadData()
    console.log(data)
    return data
  }

  return (
    <Container>
      <DayText>
        <DayWhen>날짜를 선택해주세요!</DayWhen>
      </DayText>
      <DayView pagingEnabled horizontal showsHorizontalScrollIndicator={false}>
        <DayBtn text="월" />
        <DayBtn text="화" onPress={addData} />
        <DayBtn text="수" />
        <DayBtn text="목" />
        <DayBtn text="금" />
        <DayBtn text="토" />
        <DayBtn text="일" />
      </DayView>
      {loading ? (
        <SummaryView>
          <Text>{data}</Text>
          <ResultText>
            아이가 많이 기뻐 하고 있어요! {`\n`} 많이 놀아주세요!
          </ResultText>
        </SummaryView>
      ) : (
        <SummaryView>
          <ActivityIndicator size="large" color="black" />
        </SummaryView>
      )}
    </Container>
  )
}

export default Graph
