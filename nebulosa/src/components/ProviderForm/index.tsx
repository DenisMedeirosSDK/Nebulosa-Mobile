import React, { useState } from 'react'

import { Feather as Icon } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'

import api from '../../services/api'
import {
  Container,
  Title,
  ProfileContainer,
  LabelName,
  TextInput,
  SubHeader,
  ServiceContainer,
  InputBlock,
  InputGroup,
  ButtonSubmit,
  ButtonSubmitText,
  ButtonAddTime,
  ButtonAddTimeText,
  ScheduleItem
} from './styles'

export default function ProviderForm() {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [bio, setBio] = useState('')
  const [whatsapp, setWhatsapp] = useState('')

  const [skill, setSkill] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
  }

  async function handleSubmit() {
    await api.post('services', {
      name,
      avatar,
      whatsapp,
      bio,
      skill,
      cost: Number(cost),
      schedule: scheduleItems
    }).catch((error) => {
      console.log(error)
    })
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem
    })
    setScheduleItems(updatedScheduleItems)
  }

  return (
    <Container>
      <ProfileContainer>
        <Title>Seus dados</Title>
        <LabelName>Nome</LabelName>
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Digite seu nome"
          placeholderTextColor="#c1bccc"
          keyboardType="default"
        />
        <LabelName>Avatar</LabelName>
        <TextInput
          value={avatar}
          onChangeText={text => setAvatar(text)}
          placeholder="URL da imagem"
          placeholderTextColor="#c1bccc"
          keyboardType="default"
        />
        <LabelName>Whatsapp</LabelName>
        <TextInput
          value={whatsapp}
          onChangeText={text => setWhatsapp(text)}
          placeholder="(11) 9 5555-5555"
          placeholderTextColor="#c1bccc"
          keyboardType="number-pad"
        />
        <LabelName>Biografia</LabelName>
        <TextInput
          value={bio}
          onChangeText={text => setBio(text)}
          placeholder="Conte um pouco do seus trabalhos"
          placeholderTextColor="#c1bccc" multiline
          keyboardType="default"
        />
      </ProfileContainer>
      <ServiceContainer>
        <Title>Sobre o serviço</Title>
        <LabelName>Serviço</LabelName>
        <TextInput
          value={skill}
          onChangeText={text => setSkill(text)}
          placeholder="Manicure e Pedicure"
          placeholderTextColor="#c1bccc"
          keyboardType="default"
        />

        <LabelName>Custo/Preço do serviço</LabelName>
        <TextInput
          value={cost}
          onChangeText={text => setCost(text)}
          placeholder="R$ 50,00"
          placeholderTextColor="#c1bccc"
          keyboardType="numeric"
        />
      </ServiceContainer>
      <ServiceContainer>
        <SubHeader>
          <Title>Horários disponíveis</Title>
          <ButtonAddTime onPress={addNewScheduleItem}>
            <Icon name="plus" size={28} color="#8257E5" />
            <ButtonAddTimeText>Novo</ButtonAddTimeText>
          </ButtonAddTime>
        </SubHeader>

        {scheduleItems.map((scheduleItem, index) => {
          return (
            <ScheduleItem key={scheduleItem.week_day}>
              <LabelName>Dia da semana</LabelName>
              <Picker
                selectedValue={scheduleItem.week_day}
                onValueChange={(itemValue, itemIndex) => {
                  if (itemValue !== 'default') { setScheduleItemValue(index, 'week_day', String(itemValue)) }
                }}
              >
                <Picker.Item label="Selecione um dia" value="default" color="#ccc" />
                <Picker.Item label="Segunda-Feira" value="0" />
                <Picker.Item label="Terça-Feira" value="1" />
                <Picker.Item label="Quarta-Feira" value="2" />
                <Picker.Item label="Quinta-Feira" value="3" />
                <Picker.Item label="Sexta-Feira" value="4" />
                <Picker.Item label="Sabado" value="5" />
                <Picker.Item label="Domingo" value="6" />
              </Picker>
              <LabelName>Custo/Preço do serviço</LabelName>
              <InputGroup>
                <InputBlock style={{ marginRight: 8 }}>
                  <LabelName>Das</LabelName>
                  <TextInput
                    value={scheduleItem.from}
                    onChangeText={text => setScheduleItemValue(index, 'from', text)}
                    placeholder="8:00"
                    placeholderTextColor="#c1bccc"
                  />
                </InputBlock>
                <InputBlock>
                  <LabelName>Até</LabelName>
                  <TextInput
                    value={scheduleItem.to}
                    onChangeText={text => setScheduleItemValue(index, 'to', text)}
                    placeholder="18:00"
                    placeholderTextColor="#c1bccc"
                  />
                </InputBlock>
              </InputGroup>
            </ScheduleItem>
          )
        })}

        <ButtonSubmit onPress={handleSubmit}>
          <ButtonSubmitText>Salvar Cadastro</ButtonSubmitText>
        </ButtonSubmit>
      </ServiceContainer>
    </Container>
  )
}
