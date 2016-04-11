import React from 'react'
import { Link } from 'react-router'

import DataTable from './DataTable'

class DonationSummary extends React.Component {
    constructor() {
        super();

        this.headers = [
            "Book", "Author", "Language", "Published", "Sales"
        ];

        this.varData = [
            ["The Lord of the Rings", "J. R. R. Tolkien",
                "English", "1954–1955", "150 million"],
            ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
                "French", "1943", "140 million"],
            ["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
                "English", "1997", "107 million"],
            ["And Then There Were None", "Agatha Christie",
                "English", "1939", "100 million"],
            ["Dream of the Red Chamber", "Cao Xueqin",
                "Chinese", "1754–1791", "100 million"],
            ["The Hobbit", "J. R. R. Tolkien",
                "English", "1937", "100 million"],
            ["She: A History of Adventure", "H. Rider Haggard",
                "English", "1887", "100 million"]
        ];
    }

    render() {
        return (
            <DataTable headers={this.headers} initialData={this.varData}>
            </DataTable>
        );
    }
}

export default DonationSummary;