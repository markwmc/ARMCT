import React, { useEffect, useState } from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonSpinner } from '@ionic/react';
import axios from 'axios'

const Data: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
    })
