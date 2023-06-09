import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';

export default function App() {
  const [dados, setDados] = useState([])

  const fetchProfile = async () => {
    const response = await axios.get('https://randomuser.me/api')
    setDados(response.data.results)

  }

  useEffect(() => {
    fetchProfile();
  }, [])

  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <View
        style={{
          flex: 1,
          padding: 12,
          backgroundColor: '#000000'

        }}>
        <View
          style={{

            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: '#FFF',
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 48,
            }}

          > Dados Pessoais por meio da API
          </Text>
        </View>
        <View
          style={{
            marginTop: 100,
            padding: 12,
            backgroundColor: '#7FFFD4',
          }}>

          <View>
            <Image
              style={{
                width: 100,
                height: 120,
                position: 'absolute',
                marginTop: 5

              }}
              source={{ uri: dados[0]?.picture.large }}
            />
          </View>
          <View
            style={{
              marginLeft: 110,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginRight: 4,
                }}
              >
                Nome Completo:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginRight: 15,
                }}>
                {dados[0]?.name.first} {dados[0]?.name.last}
              </Text>

            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginRight: 4,
                }}
              >
                Sexo:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                }}>
                {dados[0]?.gender}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 4
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginRight: 4,
                }}
              >
                Rua:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginRight: 10,
                }}>
                {dados[0]?.location.street.name}
              </Text>
            </View>


            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 4
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginRight: 4,
                }}
              >
                Número:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                }}>
                {dados[0]?.location.street.number}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 4
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginRight: 4,
                }}
              >
                Cidade:
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  marginRight: 15,
                }}>
                {dados[0]?.location.city}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginRight: 4,
                }}
              >
                País:
              </Text>
              <Text
                style={{
                  fontSize: 16,

                }}>
                {dados[0]?.location.country}
              </Text>

            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginRight: 4,
                }}
              >
                Estado:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginRight: 15,
                }}>
                {dados[0]?.location.state}
              </Text>

            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginRight: 4,
                }}
              >
                Código Postal:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                }}>
                {dados[0]?.location.postcode}
              </Text>
            </View>
          </View>

        </View>
      </View>
    </>
  );
}
