import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../componentes/Header';
import DataTable from '../componentes/DataTable';

export default function Home() {
  return (
    <>
      <Header />
      <DataTable />
    </>
  );
}
