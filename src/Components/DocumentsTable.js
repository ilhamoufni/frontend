
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DocumentsTable.css';

const DocumentsTable = () => {
    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await axios.get('http://localhost:3001/documents');
                setDocuments(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des documents:', error);
            }
        };

        fetchDocuments();
    }, []);

    return (
        <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Provinces</th>
                    <th>Communes</th>
                    <th>Centres</th>
                    <th>Intitule_de_documents</th>
                    <th>Responsables</th>
                    <th>Collaborateurs</th>
                    <th>Bet</th>
                    <th>Situations</th>
                    <th>Observations</th>
                    <th>Observations_chef_département</th>
                    <th>Pièces_jointes</th>
                </tr>
            </thead>
            <tbody>
                {documents.map((doc) => (
                    <tr key={doc.id}>
                        <td>{doc.id}</td>
                        <td>{doc.Provinces}</td>
                        <td>{doc.Communes}</td>
                        <td>{doc.Centres}</td>
                        <td>{doc.Intitule_de_documents}</td>
                        <td>{doc.Responsables}</td>
                        <td>{doc.Collaborateurs}</td>
                        <td>{doc.Bet}</td>
                        <td>{doc.Situations}</td>
                        <td>{doc.Observations}</td>
                        <td>{doc.Observations_chef_département}</td>
                        <td>{doc.Pièces_jointes}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default DocumentsTable;