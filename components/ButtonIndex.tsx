import { Button, View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string,

}

export default function ButtonIndex({title}: Props) { // destructuring
    return (
        <>
            <View style={styles.buttonContainer}>
                <Button title={title} ></Button>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '50%',
        marginHorizontal: 'auto',
        marginRight: '25%',
    }
})