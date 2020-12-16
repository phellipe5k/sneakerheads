import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import Context from '../Provider/Context';
import Logo from '../components/Logo';
import Menu from '../components/Menu';

export default function Home({res}) {
  return (
    <Menu logged />
  )
}
