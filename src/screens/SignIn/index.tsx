import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { SocialButton } from '../../components/SocialButton';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

function SignIn() {
  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.banner}>
            <Text style={styles.title}>Nebulosa</Text>
            <Text style={styles.subTitle}>
              Sua plataforma de agendamento rápido
            </Text>
          </View>
          <View style={styles.form}>
            <View style={styles.wrapperField}>
              <Text style={styles.label}>E-mail</Text>
              <Input
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu e-mail"
                placeholderTextColor={theme.colors.placeholder}
                returnKeyType="next"
              />
            </View>
            <View style={styles.wrapperField}>
              <Text style={styles.label}>Senha</Text>
              <Input
                keyboardType="ascii-capable"
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite sua senha"
                placeholderTextColor={theme.colors.placeholder}
                returnKeyType="go"
              />
            </View>
            <Button title="Entrar" />
            <SocialButton
              title="Entrar com Facebook"
              color="#129AF6"
              textColor="#FFF"
            />
          </View>
          <TouchableOpacity
            style={{ alignItems: 'center', marginBottom: 20, flex: 1 }}
          >
            <Text style={styles.label}>Faça seu cadastro</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Background>
  );
}

export { SignIn };
