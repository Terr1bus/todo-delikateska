import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 30px;
  padding: 0 25px;
`;

const DateBlock = styled.div`
  display: flex;
`;

const DateNumber = styled.div`
  font-size: 31px;
  line-height: 31px;
`;

const MonthYear = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > span {
    width: 100%;
    text-align: center;
  }

  & > span:first-child {
    font-size: 16px;
  }

  & > span:last-child {
    font-size: 13px;
  }
`;

const WeekDay = styled.div`
  font-size: 15px;
`;


export default function() {
  const date = new Date();
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <Header>
      <DateBlock>
        <DateNumber>{date.getDate()}</DateNumber>
        <MonthYear>
          <span>{monthNames[date.getMonth()]}</span>
          <span>{date.getFullYear()}</span>
        </MonthYear>
      </DateBlock>
      <WeekDay>{weekDays[date.getDay()]}</WeekDay>
    </Header>
  );
};