import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material';
import AWIcon from '../../UI/elements/icons/AWIcon';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const AstaWarSubscriptionIndex2 = () => {
  const theme = useTheme();
  
  const pricingOptions = [
    {
      title: 'Basic',
      price: '€2,99',
      popular: true,
      color: '#666',
      description: 'Il piano perfetto per i principianti del Fantacalcio.',
      features: [
        'Aste online in tempo reale',
        'Gestione di 1 lega',
        'Fino a 8 partecipanti',
        'Supporto email'
      ],
      buttonText: 'Inizia con Basic'
    },
    {
      title: 'Premium',
      price: '€7,99',
      recommended: true,
      color: theme.palette.primary.main,
      description: 'Per i Fantallenatori che vogliono di più.',
      features: [
        'Tutto del piano Basic',
        'Gestione fino a 3 leghe',
        'Fino a 16 partecipanti per lega',
        'Statistiche avanzate',
        'Supporto prioritario'
      ],
      buttonText: 'Inizia con Premium'
    },
    {
      title: 'Manager',
      price: '€9,99',
      color: '#FFC107',
      description: "L'ultima parola in fatto di Fantacalcio.",
      features: [
        'Tutto del piano Premium',
        'Leghe illimitate',
        'Partecipanti illimitati',
        'Algoritmi di suggerimento IA',
        'Supporto 24/7',
        'API per integrazioni'
      ],
      buttonText: 'Inizia con Manager'
    }
  ];

  return (
    <Box 
      id="pricing" 
      sx={{ 
        py: 10, 
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)'
      }}
    >
      <Container>
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" component="h2" gutterBottom fontFamily="serif">
            Scegli il tuo piano
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Piani flessibili per ogni tipo di Fantallenatore
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {pricingOptions.map((plan, index) => (
            <Grid 
              item 
              key={plan.title} 
              xs={12} 
              md={4} 
              sx={{
                transform: plan.recommended ? { md: 'scale(1.05)' } : 'none',
                zIndex: plan.recommended ? 2 : 1
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  boxShadow: plan.recommended 
                    ? '0px 10px 25px rgba(0, 0, 0, 0.15)'
                    : '0px 5px 15px rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.12)'
                  },
                  border: plan.recommended ? `2px solid ${plan.color}` : '1px solid #e0e0e0'
                }}
              >
                {plan.recommended && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      bgcolor: plan.color,
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 5,
                      fontWeight: 'medium',
                      fontSize: '0.75rem',
                      zIndex: 1
                    }}
                  >
                    Consigliato
                  </Box>
                )}
                
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h5" component="h3">
                      {plan.title}
                    </Typography>
                    {plan.popular && (
                      <Box
                        sx={{
                          border: `1px solid ${plan.color}`,
                          color: plan.color,
                          px: 1,
                          py: 0.5,
                          borderRadius: 5,
                          fontSize: '0.75rem'
                        }}
                      >
                        {index === 0 ? 'Popolare' : index === 1 ? 'Più valore' : 'Pro'}
                      </Box>
                    )}
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
                    <Typography variant="h3" component="span" fontWeight="bold">
                      {plan.price}
                    </Typography>
                    <Typography variant="subtitle1" component="span" sx={{ ml: 1, color: 'text.secondary' }}>
                      /mese
                    </Typography>
                  </Box>

                  <Typography color="text.secondary" paragraph>
                    {plan.description}
                  </Typography>

                  <List sx={{ mb: 4 }}>
                    {plan.features.map((feature) => (
                      <ListItem key={feature} disableGutters>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <AWIcon icon={faCheck} />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>

                <Box sx={{ p: 3 }}>
                  <Button 
                    variant="contained" 
                    fullWidth
                    size="large"
                    sx={{
                      py: 1.5,
                      bgcolor: plan.color,
                      '&:hover': {
                        bgcolor: plan.color === '#FFC107' 
                          ? '#F9A825' 
                          : plan.color === theme.palette.primary.main 
                            ? theme.palette.primary.dark
                            : '#555'
                      },
                      color: plan.color === '#FFC107' ? 'rgba(0,0,0,0.87)' : '#fff'
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AstaWarSubscriptionIndex2;