import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../lib/auth/context';

const SelectAccountType = () => {
  const navigate = useNavigate();
  const [role, setAccountType] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const { setUser } = useAuth();

  // Récupérer le token depuis l'URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token');
    console.log("====++++++==");
    if (tokenParam) {
      setToken(tokenParam);
      // Vérifie le rôle utilisateur avec le token
      axios
        .post(`${import.meta.env.VITE_API_URL}/auth/get-user-role`, { token: tokenParam })
        .then((response) => {
          const userRole = response.data.role;
          if (userRole) {
            setUser(response.data);
            // Si un rôle est défini, rediriger directement vers le tableau de bord
            switch (userRole) {
              case 'B2B':
                navigate('/dashboard/business');
                break;
              case 'B2C':
                navigate('/dashboard/individual');
                break;
              case 'expert':
                navigate('/dashboard/expert');
                break;
              default:
                navigate('/login'); // Rediriger en cas de rôle invalide
            }
          }
        })
        .catch((error) => {
          console.error('Failed to fetch user role:', error);
        });
    } else {
      console.error('No token found in URL');
      navigate('/login'); // Rediriger si le token est manquant
    }
  }, [navigate]);

  const handleSelection = async () => {
    if (!role) {
      alert('Please select an account type');
      return;
    }

    try {
      // Envoyer le rôle sélectionné et le token au backend
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/select-account-type`, {
        token,
        role,
      });

      // Redirection vers le tableau de bord correspondant
      switch (role) {
        case 'B2B':
          navigate('/dashboard/business');
          break;
        case 'B2C':
          navigate('/dashboard/individual');
          break;
        case 'expert':
          navigate('/dashboard/expert');
          break;
        default:
          console.error('Invalid account type');
          navigate('/login'); // Rediriger en cas d'erreur
      }
    } catch (error) {
      console.error('Error selecting account type:', error);
      alert('Failed to select account type. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Select your account type</h2>
      <div className="space-y-4">
        <button
          onClick={() => setAccountType('B2B')}
          className={`btn ${role === 'B2B' ? 'btn-selected' : ''}`}
        >
          Business Dashboard (B2B)
        </button>
        <button
          onClick={() => setAccountType('B2C')}
          className={`btn ${role === 'B2C' ? 'btn-selected' : ''}`}
        >
          Individual Dashboard (B2C)
        </button>
        <button
          onClick={() => setAccountType('expert')}
          className={`btn ${role === 'expert' ? 'btn-selected' : ''}`}
        >
          Expert Dashboard
        </button>
      </div>
      <button onClick={handleSelection} className="btn-primary mt-6">
        Confirm
      </button>
    </div>
  );
};

export default SelectAccountType;
