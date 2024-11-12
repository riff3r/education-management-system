class CookieService {
    setCookie(name: string, value: string, days?: number): void {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name}=${value || ''}${expires}; path=/`;
    }

    getCookie(name: string): string | null {
        const nameEQ = `${name}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    deleteCookie(name: string): void {
        document.cookie = `${name}=; Max-Age=-99999999; path=/`;
    }

    existsCookie(name: string): boolean {
        return !!this.getCookie(name);
    }
}

export default new CookieService();