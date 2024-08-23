import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Sample data for help topics
const helpTopics = [
    { id: '1', title: 'How to use the app?' },
    { id: '2', title: 'Payment Issues' },
    { id: '3', title: 'Account Management' },
    { id: '4', title: 'Technical Support' },
    // Add more topics as needed
];

const HelpSupportScreen = () => {
    const [message, setMessage] = useState('');

    const handleContactSupport = () => {
        // Handle the contact support action (e.g., send message)
        setMessage('');
        alert('Your message has been sent!');
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <LinearGradient
            colors={['#fddd00', '#ff6f61']} // Gradient colors
            style={styles.container}
        >
            <Text style={styles.title}>Help & Support</Text>
            <Text style={styles.subtitle}>Common Topics</Text>
            <FlatList
                data={helpTopics}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
            <Text style={styles.subtitle}>Contact Us</Text>
            <TextInput
                style={styles.input}
                placeholder="Describe your issue..."
                value={message}
                onChangeText={setMessage}
                multiline
            />
            <TouchableOpacity style={styles.button} onPress={handleContactSupport}>
                <Text style={styles.buttonText}>Send Message</Text>
            </TouchableOpacity>
            <View style={styles.contactOptions}>
                <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactText}>Call Support</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactText}>Email Support</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        marginVertical: 8,
        color: '#000',
    },
    list: {
        marginBottom: 16,
    },
    itemContainer: {
        padding: 16,
        marginBottom: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 1, // For shadow effect on Android
    },
    itemText: {
        fontSize: 16,
    },
    input: {
        height: 80,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
        fontFamily: 'Poppins-Regular',
        textAlignVertical: 'top',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
    },
    contactOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontFamily: 'Poppins-Regular',
        marginTop: 16,
    },
    contactButton: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 4,
    },
    contactText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
});

export default HelpSupportScreen;
