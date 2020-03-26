import styled from 'styled-components';
import { DefaultContainer } from '../../styles';

export const Container = styled(DefaultContainer)``;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  
  input, textarea {
    margin-top: 8px;
  }
`;

export const Title = styled.h1`
  margin: 64px 0 32px;
  font-size: 32px;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #737380;
  line-height: 32px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 140px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
  resize: vertical;
`;
