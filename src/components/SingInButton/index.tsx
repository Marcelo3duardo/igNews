import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn,signOut, useSession } from "next-auth/react"

import styles from './styles.module.scss';

export function SingInButton() {
    const { data: session } = useSession()
   
    return session ? (
        <button
            type="button"
            className={styles.singInButton}
            onClick={() => signOut()}
        >
            <FaGithub color="#04d361" />
            {session.user.name}
            <FiX className={styles.closeIcon} color="#737381" />
        </button >
    ) : (
        <button
            type="button"
            className={styles.singInButton}
            onClick={() => signIn("github")}
        >
            <FaGithub color="#eba417" />
            Sing in with GitHub
        </button >
    )
}