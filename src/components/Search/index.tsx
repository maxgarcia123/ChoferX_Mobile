import React from 'react';
import { Platform } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { fonts } from '../../screens/theme'

const Search: React.FC = () => {
    return(
            <GooglePlacesAutocomplete
                placeholder="Para onde?"               
                onPress={() => {}}
                query={{
                    key: 'AIzaSyCIOPZMR8tzQ0DCYKXTIsYwvqP6XS2GdUs',
                    language: 'pt-BR'
                }}
                textInputProps={{
                    autoCapitalize: 'none',
                    autoCorrect: false
                }}
                fetchDetails 
                enablePoweredByContainer={false} 
                styles={{
                    container: {
                        position: 'absolute',
                        top: Platform.select({ ios: 110, android: 90 }),
                        width: '100%'
                    },
                    textInputContainer: {
                        flex: 1,
                        backgroundColor: 'transparent',
                        height: 54,
                        marginHorizontal: 20,
                        borderTopWidth: 0,
                        borderBottomWidth: 0
                    },
                    textInput: {
                        height: 54,
                        margin: 0,
                        borderRadius: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginTop: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowRadius: 15,
                        borderWidth: 1,
                        borderColor: '#DDD',
                        fontSize: 17,
                        fontFamily: fonts.primaryRegular
                    },
                    listView: {
                        borderWidth: 1,
                        borderColor: '#DDD',
                        backgroundColor: '#FFF',
                        marginHorizontal: 20,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowRadius: 15,
                        marginTop: 10
                    },
                    description: {
                        fontSize: 16,
                        fontFamily: fonts.secudaryRegular,
                    },
                    row: {
                        padding: 20,
                        height: 58
                    },
                }}              
            />
    )
}

  
export default Search;